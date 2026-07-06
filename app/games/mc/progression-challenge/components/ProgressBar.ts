import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('progress-bar')
export class ProgressBar extends LitElement {
  @property({ type: Number }) currentProgress = 0
  @property({ type: Number }) totalProgress = 0

  static styles = css`
    .progress-bar {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .progress {
      flex: 1;
      min-width: 70px;
      height: 18px;
      background: var(--slot-bg);
      border: 2px solid var(--slot-border-dark);
      box-shadow: inset 0 0 0 2px var(--slot-border-light);
      position: relative;
    }
    .count {
      display: flex;
      gap: 4px;
      
      font-size: 16px;
      color: var(--text-muted);
      min-width: 70px;
      text-align: right;
    }
    .current-progress {
      height: 100%;
      background: var(--grass);
      transition: width .25s ease;
    }

  `
  render() {
    const rate = this.currentProgress / this.totalProgress
    const progress = isNaN(rate) ? 0 : rate * 100

    return html`
      <div class="progress-bar">
        <div class="progress">
          <div class="current-progress" style="width: ${progress}%"></div>
        </div>
        <div class="count">
          <p>
            <span>
              ${this.currentProgress}
            </span>
            <span>
              / 
            </span>
            <span>
              ${this.totalProgress}
            </span>
          </p> 
        </div>
      </div>
    `
  }
}