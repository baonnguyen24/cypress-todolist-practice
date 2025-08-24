import TodoPage from "../pages/TodoPage"

describe("complete items", () => {

  const todoPage = new TodoPage();

  it("completed items should be marked as Completed", () => {
    // TODO: Implement me
    // 1) Add "Feed the cat", "Walk the dog", "Buy some milk"
    // 2) Complete "Feed the cat"
    // 3) Check that "Feed the cat" is shown as completed
    cy.visit("/");
    
    todoPage.addTodoItems("Feed the cat", "Walk the dog", "Buy some milk");

    todoPage.completeTodoItem("Feed the cat");

    cy.get("[data-testid='todo-item'].completed").then($items => {
      const completedItems = [...$items].map(el => el.innerText.trim());

      expect(completedItems).to.deep.equal([
        "Feed the cat"
      ]);
    });
  })

  it("Completing an item should update the number of items left count", () => {
    // TODO: Implement me
    // 1) Add "Feed the cat", "Walk the dog", "Buy some milk"
    // 2) Complete "Feed the cat"
    // 3) Verify the todo count shows "2 items left!"
    cy.visit("/");

    todoPage.addTodoItems("Feed the cat", "Walk the dog", "Buy some milk");

    todoPage.completeTodoItem("Feed the cat");

    cy.get(".todo-count").should("have.text", "2 items left!");
  })

  it("Should be able to clear completed items", () => {
    // TODO: Implement me
    // 1) Add "Feed the cat", "Walk the dog", "Buy some milk"
    // 2) Complete "Walk the dog"
    // 3) Clear the completed items
    // 4) Verify that the remaining items are "Feed the cat" and "Buy some milk"
    cy.visit("/");

    todoPage.addTodoItems("Feed the cat", "Walk the dog", "Buy some milk");

    todoPage.completeTodoItem("Walk the dog");

    todoPage.clearCompleted();

    cy.get("[data-testid='todo-item']").then($items => {
      const allItems = [...$items].map(el => el.innerText.trim());

      expect(allItems).to.deep.equal([
        "Feed the cat",
        "Buy some milk"
      ]);
    });
  })
})