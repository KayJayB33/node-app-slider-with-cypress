describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(1000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(1000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Text', function () {
  it('Checks if user can switch between slides with buttons', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active').should('contain', 'Italy');
    cy.get('.swiper-button-next').click();
    cy.wait(1000);
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.get('.swiper-button-next').click();
    cy.wait(1000);
    cy.get('.swiper-slide-active').should('contain', 'France');
    cy.get('.swiper-button-prev').click();
    cy.wait(1000);
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.get('.swiper-button-prev').click();
    cy.wait(1000);
    cy.get('.swiper-slide-active').should('contain', 'Italy');
  });
});

describe('Swiper Gallery Text', function () {
  it('Checks if user is redirected to first slide after clicking next on last slide', function () {
    const slides = ['Italy', 'United Kingdom', 'France']
    cy.visit('http://localhost:3000');
    for (let i = 0; i < 2; i++) {
      slides.forEach(slide => {
        cy.get('.swiper-slide-active').should('contain', slide);
        cy.get('.swiper-button-next').click();
        cy.wait(1000);
      });
    }
  });
});