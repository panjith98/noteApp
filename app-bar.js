class AppBar extends HTMLElement {
  
    constructor() {
      super();

      this._shadowRoot = this.attachShadow({ mode: 'open' });
      this._style = document.createElement('style');
    }

    connectedCallback() {
      this.render();
    }
    
    _updateStyle() {
      this._style.textContent = `  
        .title {
        font-size: 20px;
        padding: 10px;
        background-color: #0060ce;
        text-align: center;
        color: white;
        }
        nav a {
          font-size: 18px;
          font-weight: 400;
          text-decoration: none;
          color: white;
        }
      
        nav a:hover {
          font-weight: bold;
        }
        nav ul {
          padding-inline: 4rem;
          display: flex;
          gap: 2rem;
        }
      
        nav li {
          list-style-type: none;
        }
      
        nav {
          background-color: #0059be;
          padding: 5px;
          position: sticky;
          top: 0;
        }
      `;
    }

    render(){
      this.emptyContent();
      this._updateStyle();
      this.shadowRoot.appendChild(this._style);
      this.shadowRoot.innerHTML +=`
      <div class="title">
        <h1>Notes App</h1>
      </div>
      <nav>
        <ul>
        <li>
          <a href="#add-note">Add Note</a>
        </li>
        <li>
          <a href="#notes-list">Notes List</a>
        </li>
        </ul>
      </nav>
     `;
    }

    emptyContent() {
      this._shadowRoot.innerHTML = '';
    }
  }
   
  customElements.define('app-bar', AppBar);