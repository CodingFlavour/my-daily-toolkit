import { css, html, LitElement, PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";
import { MILESTONES } from './components/data';


export type LocalStorageData = {
  completed: {
    [key: string]: boolean
  },
  notes: {
    [key: string]: string
  }
}

const STORAGE_KEY = 'mc-version-tracker:state';
const STORAGE_INITIAL_DATA: LocalStorageData = {
  completed: {},
  notes: {}
}


@customElement('mc-tracker')
export class McTracker extends LitElement {
  @property({ type: Object }) currentData: LocalStorageData | null = null

  static styles = css`
    .header {
      max-width: 720px;
      margin: 0 auto 28px;
    }

    h1 {
      font-family: 'Press Start 2P', monospace;
      font-size: 18px;
      letter-spacing: 1px;
      color: var(--grass);
      margin: 0 0 6px;
      text-shadow: 2px 2px 0 #0a0a07;
    }

    p {
      color: var(--text-muted);
      font-size: 17px;
      margin: 0 0 18px;
    }

    ul {
      max-width: 720px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 14px;
      padding: 0;
    }
  `

  getAchievements() {
    if (!this.currentData) return null

    const {
      completed,
      notes
    } = this.currentData

    const getNote = (id: string) => notes[id] ?? ""

    return MILESTONES.map(milestone => ({
      ...milestone,
      categorias: milestone.categorias.map(cc => ({
        ...cc,
        hitos: cc.hitos.map(hc => ({
          ...hc,
          completed: !!completed[hc.id],
          note: getNote(hc.id)
        }))
      }))
    }))
  }

  toggleAchievement = (e: CustomEvent) => {
    if (!this.currentData) return null;

    const {
      id
    } = e.detail

    this.currentData = {
      ...this.currentData,
      completed: {
        ...this.currentData.completed,
        [id]: !this.currentData.completed[id]
      }
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.currentData))
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    if (!this.currentData) {
      const localData = localStorage.getItem(STORAGE_KEY)

      const parsedLocalData = localData ? JSON.parse(localData) as LocalStorageData : STORAGE_INITIAL_DATA;

      this.currentData = parsedLocalData
    }
  }

  toggleNote = (e: CustomEvent) => {
    if (!this.currentData) return null;

    const {
      id,
      note
    } = e.detail

    this.currentData = {
      ...this.currentData,
      notes: {
        ...this.currentData.notes,
        [id]: note,
      }
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.currentData))
  }

  render() {
    if (!this.currentData) return html`<div>Cargando...</div>`

    const transformedAchievements = this.getAchievements()

    const totalAchievements = transformedAchievements?.reduce((p, c) => ({
      c: p.c + c.categorias.reduce((cp, cc) => cp + cc.hitos.reduce((hp, hc) => hc.completed ? hp + 1 : hp, 0), 0),
      t: p.t + c.categorias.reduce((cp, cc) => cp + cc.hitos.length, 0)
    }), { c: 0, t: 0 })

    const totalCompletedAchievements = totalAchievements?.c ?? 0
    const totalTotalAchievements = totalAchievements?.t ?? 0

    return html`
      <div class="header" @toggle-achievement=${this.toggleAchievement} @toggle-note=${this.toggleNote}>
        <h1>PROGRESIÓN MC: ALPHA → RELEASE</h1>
        <p>Checklist de hitos por versión, parada a parada</p>
        <progress-bar .currentProgress=${totalCompletedAchievements} .totalProgress=${totalTotalAchievements}></progress-bar>
        <ul>
          ${transformedAchievements?.map(m => html`
              <mc-milestone .milestone=${m}></mc-milestone>
              `)}
        </ul>
      </div>
    `
  }
}

