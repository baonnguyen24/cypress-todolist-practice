import TodoPage from "../pages/TodoPage"

describe("add and delte items", () => {

  const todoPage = new TodoPage();

  it("can add a single item", () => {
    // TODO: Implement me
    // 1) Add a single todo item "Feed the cat"
    // 2) Verify that the list contains exactly "Feed the cat"
    cy.visit("/");
    todoPage.addTodoItem("Feed the cat");
    cy.get("[data-testid='todo-item-label']").contains("Feed the cat").should("exist");
  })

  it("can add multiple items", () => {
    // TODO: Implement me
    // 1) Add multiple items "Feed the cat" and "Walk the dog"
    // 2) Verify that the list contains exactly "Feed the cat" and "Walk the dog"
    cy.visit("/");
    todoPage.addTodoItems("Feed the cat", "Walk the dog");
    cy.get("[data-testid='todo-item-label']").contains("Feed the cat").should("exist");
    cy.get("[data-testid='todo-item-label']").contains("Walk the dog").should("exist");
  })

  it("can't add an empty item", () => {
    // TODO: Implement me
    // 1) Add a valid item "Feed the cat"
    // 2) Attempt to add an empty item
    // 3) Verify that the list contains only "Feed the cat"
    cy.visit("/");
    todoPage.addTodoItems("Feed the cat", "");
    cy.get("[data-testid='todo-list'] li").should("have.length", 1);
  })

  it("add duplicate items", () => {
    // TODO: Implement me
    // 1) Add items "Feed the cat", "Walk the dog", and "Feed the cat" again
    // 2) Verify that the list contains duplicates in the order they were added
    cy.visit("/");
    todoPage.addTodoItems("Feed the cat", "Walk the dog", "Feed the cat");
    
    cy.get("[data-testid='todo-list'] li").should("have.length", 3);
    cy.get("[data-testid='todo-list'] li").then($items => {
      const item = $items.toArray().map(el => el.textContent.trim());

      expect(item).to.deep.equal([
        "Feed the cat",
        "Walk the dog",
        "Feed the cat"
      ])
    })
  })

  it("delete an item in the middle of the list", () => {
    cy.visit("/");
   
    todoPage.addTodoItems("Feed the cat", "Walk the dog", "Buy some milk");

    todoPage.deleteTodoItem("Walk the dog");

    cy.get("[data-testid='todo-list'] li").should("have.length", 2);
    cy.get("[data-testid='todo-list'] li").then($items => {
      const item = $items.toArray().map(el => el.textContent.trim());

      expect(item).to.deep.equal([
        "Feed the cat",
        "Buy some milk"
      ])
    })
  })

  it("delete an item at the end of the list", () => {
    cy.visit("/");
  
    todoPage.addTodoItems("Feed the cat", "Walk the dog", "Buy some milk");

    todoPage.deleteLastTodoItem();

    cy.get("[data-testid='todo-list'] li").should("have.length", 2);
    cy.get("[data-testid='todo-list'] li").then($items => {
      const item = $items.toArray().map(el => el.textContent.trim());

      expect(item).to.deep.equal([
        "Feed the cat",
        "Walk the dog"
      ])
    })
  })
})