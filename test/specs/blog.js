describe('Blog', () => {
  it('Open Contact Page, fill the form & assert success message', async () => {
    await browser.url('/blog');

    const recentPosts = await $$('#recent-posts-3 ul li');

    await expect(recentPosts).toHaveLength(5);

    for (const post of recentPosts) {
      await expect((await post.getText()).length).toBeGreaterThan(10);
      //   console.log('\n' + '---------------> ' + '\n' + (await post.getText());
    }
  });
});
