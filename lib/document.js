const { formatDate } = require("./date.js");

formatDate;

class Component {
	constructor(children = []) {
		this.children = children;
	}
	render() {
		throw new Error("Child class must implement render() method");
	}
	renderInnerHTML() {
		return this.children
			.map((child) => {
				if (typeof child === "string") {
					return child;
				}
				return child.render();
			})
			.join("");
	}
}

class Header extends Component {
	render() {
		const date = formatDate(new Date());
		return `<header class="header"><h1>Todo Today</h1><p>${date}</p></header>`;
	}
}

class TaskListItem extends Component {
	constructor(children) {
		super(children);
		this.priority = priority;
	}
	render() {
		const innerHTML = this.renderInnerHTML;
		return `<li class="tasks-item">${innerHTML}</li>`;
	}
}

class TaskList extends Component {
	constructor(children) {
		super(children);
	}
	render() {
		const innerHTML = this.renderInnerHTML;
		return `<ul class="tasks">${innerHTML}</ul>`;
	}
}

function createDocument(title, tasks = []) {
	// TODO: Create a new Header
	// TODO: Create new TaskListItems from the provided tasks
	// TODO: Add TaskListItems to a new TaskList

	// TODO: Modify the template below to include your title, Header, and TaskList
	return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>YOUR TITLE HERE</title>
      <link rel="stylesheet" href="../dist/style.css" />
    </head>
    <body>
      <div class="card">
        YOUR HEADER
        YOUR TASKLIST
      </div>
    </body>
  </html>
  `;
}

module.exports = { createDocument };
