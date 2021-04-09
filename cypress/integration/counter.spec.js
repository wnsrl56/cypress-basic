describe('ui-counter',() => {
  const defaultValue = 10;
  const classNames = {
    plusButton: '.plus-button',
    minusButton: '.minus-button',
    countDisplay: '.count-display'
  }

  beforeEach(() => {
    cy.visit(`http://localhost:5500/`);
  });
  it('카운터 컴포넌트가 렌더링 된다.', () => {
    cy.contains('ui counter');
    cy.contains('+');
    cy.contains('-');
  });

  it('초기 값을 갖는다.', () => {
    const {countDisplay} = classNames;
    const display = cy.get(countDisplay);
    display.should('have.value', defaultValue);
  });

  it('+ 버튼 클릭시 1 증가한다.', () => {
    const {plusButton, countDisplay} = classNames;
    cy.get(plusButton).click();
    cy.get(countDisplay).should('have.value', defaultValue + 1);
  });
  it('- 버튼 클릭시 1 감소한다.', () => {
    const {minusButton, countDisplay} = classNames;
    cy.get(minusButton).click();
    cy.get(countDisplay).should('have.value', defaultValue - 1);
  });
  it('최대 12 값을 넘지 않는다.', () => {
    const {plusButton, countDisplay} = classNames;
    const plus = cy.get(plusButton);
    let count = 5;
    while(count--) {
      plus.click();
    }
    cy.get(countDisplay).should('have.value', '12');
  });

  it('최소 8 값 미만으로 내려가지 않는다.', () => {
    const {minusButton, countDisplay} = classNames;
    const minus = cy.get(minusButton);
    let count = 5;
    while(count--) {
      minus.click();
    }
    cy.get(countDisplay).should('have.value', '8');
  });
})

