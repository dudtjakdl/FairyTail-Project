import {API_AUTH} from '@apis/index';

export const saveToken = () => {
  // url에 있는 토큰이름 가져오기
  const params = new URLSearchParams(window.location.search);

  // localstorage에 토큰 저장(string 형태)
  const token = String(params.get('accessToken'));

  // "1"이 아닌 1로 저장하기 위해 JSON.stringify이 아닌 String 사용
  const userId = String(params.get('userId'));

  window.localStorage.setItem('token', token);
  window.localStorage.setItem('userId', userId);
};

export const saveFirebaseToken = async (data: object) => {
  const res = await API_AUTH.post(`/user/`, data);
  return res.data;
};
