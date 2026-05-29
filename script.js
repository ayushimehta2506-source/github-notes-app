function addNote() {

  const input = document.getElementById("noteInput");

  const list = document.getElementById("notesList");

  if (input.value === "") return;

  const li = document.createElement("li");

  li.innerHTML = `
    ${input.value}
    <button onclick="this.parentElement.remove()">
      Delete
    </button>
  `;

  list.appendChild(li);

  input.value = "";
}