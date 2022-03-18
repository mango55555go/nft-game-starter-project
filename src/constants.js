const CONTRACT_ADDRESS = '0xe6Ebc91066f2465b46CF9f2824b5A9390CAF11C5';

const transformCharacterData = ({ name, imageURI, hp, maxHp, attackDamage}) => {
  return {
    name,
    imageURI,
    hp: hp.toNumber(),
    maxHp: maxHp.toNumber(),
    attackDamage: attackDamage.toNumber(),
  };
};

export { CONTRACT_ADDRESS, transformCharacterData };