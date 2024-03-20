const tabs = document.querySelectorAll('.tab-price__tab');
const tabsItems = document.querySelectorAll('.tab-price__content');

export function openTabs() {
  tabs.forEach((item) => {
    item.addEventListener('click', () => {
      const currentTab = item;
      const tabId = currentTab.getAttribute('data-tab');
      const currentItem = document.querySelector(tabId);

      if (!currentTab.classList.contains('tab-active')) {
        tabs.forEach((item) => {
          item.classList.remove('tab-active');
        });

        tabsItems.forEach((item) => {
          item.classList.remove('tab-active');
        });

        currentTab.classList.add('tab-active');
        currentItem.classList.add('tab-active');
      }
    });
  });

  document.querySelector('.tab-price__tab').click();
}
