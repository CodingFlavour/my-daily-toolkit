import { css, CSSResultGroup, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Category } from "./data";

type ValuedInputEvent = InputEvent & {
  currentTarget: InputEvent['currentTarget'] & { value: string }
}

@customElement('mc-achievements')
export class McAchievements extends LitElement {
  @property({ type: Object }) achievements: Category | null = null

  static styles = css`
    * {
      box-sizing: border-box;
    }
    .achievement {    
      margin-top: 14px;
    }

    h4 {
      font-size: 14px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: var(--redstone);
      margin-bottom: 6px;
    }

    li {  
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 6px 0;
    }

    button {
      flex: 0 0 26px;
      width: 26px;
      height: 26px;
      cursor: pointer;
      background: var(--slot-bg);
      border: 2px solid var(--slot-border-dark);
      box-shadow: inset 0 0 0 2px var(--slot-border-light);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Press Start 2P', monospace;
      font-size: 12px;
      color: var(--gold);
    }

    button:focus-visible {
      outline: 2px solid var(--gold);
      outline-offset: 2px;
    }

    button[aria-pressed=true] {
      background: #3d4a2a;
      border-color: #1c2410;
      box-shadow: inset 0 0 0 2px #5f7a3a;
    }

    ul {
      margin: 0;
      padding: 0;
    }

    li div {
      flex: 1;
      min-width: 0;
    }

    h5 {
      margin: 0;
      font-size: 18px;
    }

    li:has(button[aria-pressed=true]) {
      color: var(--text-muted);
      text-decoration: line-through;
      text-decoration-color: var(--stone-dark);
    }

    input {
      width: 100%;
      margin-top: 4px;
      background: var(--bg-void);
      color: var(--text-primary);
      border: 1px solid var(--stone-dark);
      font-family: 'VT323', monospace;
      font-size: 15px;
      padding: 4px 6px;
    }
    input::placeholder {
      color: var(--stone-dark);
    }
    input:focus-visible {
      outline: 1px solid var(--gold);
    }
    `

  handler(id: string) {
    const data: CustomEventInit = {
      detail: { id },
      bubbles: true,
      composed: true
    }

    const customEvent = new CustomEvent('toggle-achievement', data)

    this.dispatchEvent(customEvent)
  }

  handleNewNote(e: ValuedInputEvent, id: string) {
    const value = e.currentTarget.value

    const data: CustomEventInit = {
      detail: { id, note: value },
      bubbles: true,
      composed: true
    }

    const customEvent = new CustomEvent('toggle-note', data)

    this.dispatchEvent(customEvent)

  }

  render() {
    if (!this.achievements) {
      return html`
        <h2>No se ha encontrado logros</h2>
      `
    }

    const {
      label,
      hitos
    } = this.achievements

    return html`
      <div class="achievement">
        <h4>${label}</h4>
        <ul>
          ${hitos.map(h => html`
            <li id=${h.id}>
              <button type="button" aria-pressed=${!!h.completed} @click=${() => this.handler(h.id)}>
                ${h.completed ? '✓' : ''}
              </button>
              <div>
                <h5>
                  ${h.texto}
                </h5>
                <input 
                  type="text"
                  placeholder="Nota (Opcional)"
                  .value=${h.note ?? ""} 
                  @change=${(e: ValuedInputEvent) => this.handleNewNote(e, h.id)} 
                />
              </div>
            </li>
          `)
      }
        </ul>
  </div>
    `
  }
}