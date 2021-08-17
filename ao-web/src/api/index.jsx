import axios from './axios';

const BASE = ''; //Proxy server

//get all competition
export const reqGetAllCompetitions = () => axios.get(BASE + '/competition');

//update competition
export const reqUpdateCompetition = (competition) => axios.put(BASE + '/competition',competition);

//get all members
export const reqGetAllMembers = () => axios.get(BASE + '/member');

//all member by id
export const reqMemberById = (id) => axios.get(BASE + '/member/detail', {
  params: {id}
});