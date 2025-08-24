import TodoPage from "../pages/TodoPage"

describe("filtering todo items", () => {

  const todoPage = new TodoPage();

  it("All items should be displayed by default", () => {
    // TODO: Implement me
    // 1) Add "Feed the cat", "Walk the dog", "Buy some milk"
    // 2) Verify that the active filter is set to "All"
    cy.visit("/");

    todoPage.addTodoItems("Feed the cat", "Walk the dog", "Buy some milk");

    cy.get(".selected").should("contains.text", "All");
  })

  it("Should be able to filter active items", () => {
    // TODO: Implement me
    // 1) Add "Feed the cat", "Walk the dog", "Buy some milk"
    // 2) Complete "Walk the dog"
    // 3) Apply the "Active" filter
    // 4) Verify that only "Feed the cat" and "Buy some milk" are displayed
    cy.visit("/");

    todoPage.addTodoItems("Feed the cat", "Walk the dog", "Buy some milk");

    todoPage.completeTodoItem("Walk the dog");

    todoPage.selectFilter("Active");

    cy.get("[data-testid='todo-item']").then($items => {
      const activeItems = [...$items].map(el => el.innerText.trim());

      expect(activeItems).to.deep.equal([
        "Feed the cat",
        "Buy some milk"
      ]);
    });
  })

  it("Should be able to filter completed items", () => {
    // TODO: Implement me
    // 1) Add "Feed the cat", "Walk the dog", "Buy some milk"
    // 2) Complete "Walk the dog"
    // 3) Apply the "Completed" filter
    // 4) Verify that only "Walk the dog" is displayed
    cy.visit("/");

    todoPage.addTodoItems("Feed the cat", "Walk the dog", "Buy some milk");

    todoPage.completeTodoItem("Walk the dog");

    todoPage.selectFilter("Completed");

    cy.get("[data-testid='todo-item'].completed").then($items => {
      const completedItems = [...$items].map(el => el.innerText.trim());

      expect(completedItems).to.deep.equal([
        "Walk the dog"
      ]);
    });
  })
})