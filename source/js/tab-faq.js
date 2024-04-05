const tabs = document.querySelectorAll('.tab-faq__tab');
const tabsItems = document.querySelectorAll('.tab-faq__content');

export function openTabsSecond() {

  tabs.forEach((item, index) => {
    item.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowUp') {
        const prevIndex = (index - 1 + tabs.length) % tabs.length;
        tabs[prevIndex].focus();
        event.preventDefault();
      } else if (event.key === 'ArrowDown') {
        const nextIndex = (index + 1) % tabs.length;
        tabs[nextIndex].focus();
        event.preventDefault();
      } else if (event.key === 'Enter') {
        item.click();
        event.preventDefault();
      }
    });
  });

  tabs.forEach((item) => {
    item.addEventListener('click', () => {
      const currentTab = item;
      const tabId = currentTab.getAttribute('data-tab');
      const currentItem = document.querySelector(tabId);

      if (!currentTab.classList.contains('tab-active')) {
        tabs.forEach((item2) => {
          item2.classList.remove('tab-active');
        });

        tabsItems.forEach((item2) => {
          item2.classList.remove('tab-active');
        });

        currentTab.classList.add('tab-active');
        currentItem.classList.add('tab-active');
      }
    });
  });

  document.querySelector('.tab-faq__tab').click();
}
