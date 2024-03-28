const tabs = document.querySelectorAll('.tab-faq__tab');
const tabsItems = document.querySelectorAll('.tab-faq__content');

export function openTabsSecond() {
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

  document.querySelector('.tab-faq__tab').click();
}
