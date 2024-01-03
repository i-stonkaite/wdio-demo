describe("About", () => {
  it("Open About Page & assert URL", async () => {
    await browser.url("https://practice.sdetunicorns.com/");
    await $("#menu-item-491").click();

    // const currentUrl = await browser.getUrl();

    await expect(browser).toHaveUrl("https://practice.sdetunicorns.com/about/");
  });
});
