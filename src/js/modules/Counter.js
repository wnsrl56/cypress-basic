export default function Counter({ $app }) {
  const render = () => {
    $app.innerHTML = `
       <div class="container">
          <h1>ui counter</h1>
          <div class="counter">
            <a href="#" class="minus-button"><span>-</span></a>
            <input readonly name="count" type="text" class="count-display" value="10">
            <a href="#" class="plus-button"><span>+</span></a>
          </div>
        </div>`;
  };

  const appendEvents = ({ increaseValue, decreaseValue }) => {
    const plusEl = document.querySelector('.plus-button');
    const minusEl = document.querySelector('.minus-button');

    plusEl.addEventListener('click', increaseValue);
    minusEl.addEventListener('click', decreaseValue);
  };

  const increaseValue = () => {
    const inputEl = document.querySelector('.count-display');
    const value = Number(inputEl.value);
    
    if(value >= 12) return;
    inputEl.value = value + 1;
  }

  const decreaseValue = () => {
    const inputEl = document.querySelector('.count-display');
    const value = Number(inputEl.value);

    if(value <= 8) return;
    inputEl.value = value - 1;
  }
  const init = () => {
    render();
    appendEvents({ increaseValue, decreaseValue });
  };

  init();
}
