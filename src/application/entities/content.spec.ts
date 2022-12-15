import { Content } from './content';

describe('Content content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicção de amizade');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content w less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('should not be able to create a notification content more less than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
