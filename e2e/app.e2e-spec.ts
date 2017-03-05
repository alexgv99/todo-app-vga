import { TodoAppVgaPage } from './app.po';

describe('todo-app-vga App', () => {
  let page: TodoAppVgaPage;

  beforeEach(() => {
    page = new TodoAppVgaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
