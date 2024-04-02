class AddNote extends HTMLElement {

    constructor() {
      super();
  
      this._Root = this.attachShadow({ mode: "open" });
      this._style = document.createElement("style");
    }
    _updateStyle() {
      this._style.textContent = `
                  .form-container {
                      background-color: #c2e5fb;
      
                  }
                  
                  .form-container h2 {
                      text-align: justify;
                      font-size: 2em;
                      color: white;
                      padding-top: 20px;
                      
                  }
                  
                  form {
                      margin-top: 10px;
                      text-align: center;
                      display: flex;
                      flex-direction: column;
                    
                  }
                  
                  input[type="text"],
                  form textarea {
                      padding: 10px;
                      font-size: 15px;
                      margin-top: 20px;
                      font-size: 16px;
                      display: block;
                      margin-left: auto;
                      margin-right: auto;
                  }
                  
                  form button {
                      margin-top: 10px;
                      margin-bottom: 10px;
                      padding: 15px;
                      background-color: white;
                      border: none;
                      border-radius: 20px;
                      width: 100px;
                      cursor: pointer;
                      font-size: 15px;
                      align-self: center;
                    
                  }
  
                  @media screen and (max-width: 500px) {
                      input, textarea {
                          width: 100%;
                      }
                  }
       `;
    }
  
    _emptyContent() {
      this._Root.innerHTML = "";
    }
    set note(value) {
      this._note = value;
   
      this.render();
    }
   
    get note() {
      return this._note;
    }
    connectedCallback() {
      this.render();
    }
  
    render() {
      this._emptyContent();
      this._updateStyle();
  
      this._Root.appendChild(this._style);
      this._Root.innerHTML += `
          <div class="form-container">
              <h2>Add Notes</h2>
              <form id="form">
              <div class="form-add">
                  <input
                  type="text"
                  name="add-title"
                  id="add-title"
                  placeholder="Add Title"
                  size="65"
                  required
                  />
              </div>
              
              <div class="form-add">
                  <textarea
                  name="add-note"
                  id="add-note"
                  cols="62"
                  rows="10"
                  placeholder="Please type a note..."
                  required
                  ></textarea>
              </div>
              <button id="submit">Submit</button>
              </form>
          </div>
      `;
  
      const submitButton = this._Root.getElementById("form");
      submitButton.addEventListener("submit", (event) => {
        event.preventDefault();
  
        const inputTitle = this._Root.getElementById("add-title").value;
        const inputNote = this._Root.getElementById("add-note").value;
  
        const addNote = {
          id: this.id,
          title: inputTitle,
          body: inputNote,
          createdAt: new Date().toISOString(),
          archived: false,
        };

        console.log(addNote);
  
        this.dispatchEvent(new CustomEvent("addNewNote", { detail: addNote }));
      });
    }
}
  
  
  customElements.define("form-addnote", AddNote);