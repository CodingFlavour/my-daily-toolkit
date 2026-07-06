import { css, html, LitElement, nothing, PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Milestone } from "./data";

@customElement('mc-milestone')
export class McMilestone extends LitElement {
  @property({ type: Object }) milestone: Milestone | null = null
  @property({ type: Boolean }) isExpanded = false

  static styles = css`
    .milestone {
      background: var(--bg-panel);
      border: 2px solid var(--stone-dark);
    }
    .milestone.expanded {
      background: var(--bg-panel-alt);
    }
    .milestone__header {
      cursor: pointer;
      list-style: none;
      padding: 12px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }
    .milestone__header:focus-visible {
      outline: 2px solid var(--gold);
      outline-offset: -2px;
    }
    .milestone__header__info {
      display: flex;
      gap: 8px;
    }

    .icon {
      background: none;
      border: 0;
      display: inline-block;
      margin-right: 6px;
      color: var(--stone);
      transition: transform .15s ease;
      cursor: pointer;
    }
    .milestone.expanded .icon {
      transform: rotate(90deg);
    }

    h2 {
      font-family: 'Press Start 2P', monospace;
      font-size: 12px;
      color: var(--text-primary);
    }
    .sub {
      font-size: 15px;
      color: var(--text-muted);
      margin-top: 4px;
    }
    .achievements {
      padding: 6px 16px 16px;
      border-top: 1px solid var(--stone-dark);
    }
  `

  private toggleAccordeon = () => this.isExpanded = !this.isExpanded

  protected firstUpdated(_changedProperties: PropertyValues): void {
    this.isExpanded = this.milestone?.abierta ?? false
  }

  render() {
    if (!this.milestone) {
      return html`
        <h2>No se ha encontrado hito</h2>
      `
    }

    const {
      id,
      nombre,
      sub,
      categorias,
    } = this.milestone

    const completedAchievements = categorias.reduce((pc, cc) => {
      const totalCompleted = cc.hitos.filter(h => h.completed)

      return {
        c: pc.c + totalCompleted.length,
        t: pc.t + cc.hitos.length
      }
    }, { c: 0, t: 0 })

    return html`
      <section id=${id} class="milestone ${this.isExpanded ? 'expanded' : ''}">
        <details>
          <summary class="milestone__header" @click=${this.toggleAccordeon}>
            <div>
              <div class="milestone__header__info">
                <i class="icon">▸</i>
                <h2>${nombre}</h2>
              </div>
              <p class="sub">${sub}</p>
            </div>
            <progress-bar currentProgress=${completedAchievements.c} totalProgress=${completedAchievements.t}></progress-bar>
          </summary>
          </details>
          <div class="achievements">
            ${this.isExpanded ?
        categorias.map(c => html`<mc-achievements .achievements=${c}></mc-achievements>`)
        : nothing
      }
      </div>
      </section>
    `
  }
}