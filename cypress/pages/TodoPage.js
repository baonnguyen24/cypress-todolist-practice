class TodoPage {
    addTodoItem(item) {
        cy.get("#todo-input").type(`${item}{enter}`);
    }

    addTodoItems(...items) {
        items.forEach((item) => {
            this.addTodoItem(item);
        })
    }

    deleteTodoItem(item) {
        cy.contains("[data-testid='todo-item']", item)
            .find("[data-testid='todo-item-button']")
            .click({force:true});
    }

    deleteLastTodoItem() {
        cy.get("[data-testid='todo-item']")
            .last()
            .find("[data-testid='todo-item-button']")
            .click({force:true});
    }

    deleteFirstTodoItem() {
        cy.get("[data-testid='todo-item']")
            .first()
            .find("[data-testid='todo-item-button']")
            .click({force:true});
    }

    completeTodoItem(item) {
        cy.contains("[data-testid='todo-item']", item)
            .find("[data-testid='todo-item-toggle']")
            .click();
    } 

    clearCompleted() {
        cy.contains(".clear-completed", "Clear completed").click();
    }

    selectFilter(filter) {
        cy.contains('[data-testid="footer-navigation"] a', filter).click();
    }
}

export default TodoPage;