const BASE_URL = 'http://192.168.1.173:8080/api/saes';

export const getAllSaes = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};
export const getSaeById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  return response.json();
};
export const getSaesByAnnee = async (annee) => {
  const response = await fetch(`${BASE_URL}/annee/${annee}`);
  return response.json();
};
export const getSaesByDomaine = async (domaine) => {
  const response = await fetch(`${BASE_URL}/domaine/${domaine}`);
  return response.json();
};
export const getClassement = async () => {
  const response = await fetch(`${BASE_URL}/classement`);
  return response.json();
};
export const addSae = async (sae) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(sae),
  });
  return response.json();
};