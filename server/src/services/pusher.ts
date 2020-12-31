import Pusher from 'pusher';

export const pusher = new Pusher({
  appId: '1130404',
  key: 'c3acf5ea606cbffb9e16',
  secret: '4883563f0bb8028bd399',
  cluster: 'ap1',
  useTLS: true,
});
