import blogPage from '../pages/blog-page.js';

describe('Blog', () => {
  it('Open Contact Page, fill the form & assert success message', async () => {
    await blogPage.open();

    const recentPosts = await blogPage.recentPostsList;

    await expect(recentPosts).toHaveLength(5);

    for (const post of recentPosts) {
      await expect((await post.getText()).length).toBeGreaterThan(10);
      //   console.log('\n' + '---------------> ' + '\n' + (await post.getText());
    }
  });
});
