/**
 * - Login Spec
 *  - should display login page correctly
 *  - should display alert when email is empty
 *  - should display alert when password is empty
 *  - should display alert when email and password are wrong
 *  - should display homepage when email and password and correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should display login page correctly', () => {
    // memverifikasi elemen yang harus tampak pada halaman login
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains(/^Login$/).should('be.visible');
  });

  it('should display alert when email is empty', () => {
    // klik tombol login tanpa mengisi email
    cy.get('button').contains(/^Login$/).should('be.visible');

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    // mengisi email
    cy.get('input[placeholder="Email"]').should('be.visible');

    // klik tombol login tanpa mengisi email
    cy.get('button').contains(/^Login$/).should('be.visible');

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"Password" is not allowed to be empty');
    });
  });

  it('should display alert when username and password are wrong', () => {
    // Mengisi email
    cy.get('input[placeholder="Email"]').type('email@example.com');

    // Mengisi password yang salah
    cy.get('input[placeholder="Password"]').type('wrong_password');

    // Menekan tombol Login
    cy.get('button').contains(/^Login$/).click();

    // Memverifikasi window.alert untuk menampilkan pesan dai API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });

  it('should display alert when username and password are correct', () => {
    // Mengisi email
    cy.get('input[placeholder="Email"]').type('lunan@gmail.com');

    // Mengisi password yang salah
    cy.get('input[placeholder="Password"]').type('lunan123');

    // Menekan tombol Login
    cy.get('button').contains(/^Login$/).click();

    // Memverifikasi bahwa elemen yang berada di hompeage ditampilkan
    cy.get('nav').contains(/^Forum-App$/).should('be.visible');
    cy.get('button').contains('logout').should('be.visible');
  });
});