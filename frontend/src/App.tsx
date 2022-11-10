// notification
import {
  initToken,
  requestPermission,
} from '@apis/notifications/getMessagingToken';

import {Suspense, useEffect, useState, useRef} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import bgm from '@bgms/silver_waves.mp3';

import '@/App.scss';

import Loading from '@components/loading/Loading';
// route
import Intro from '@screens/Intro';
import Main from '@screens/Main';
import Globe from '@screens/Globe';
import Map from '@screens/Map';
import MessageList from '@screens/MessageList';
import MessageCreate from '@screens/MessageCreate';
import MessageDetail from '@screens/MessageDetail';
import VR from '@screens/VR';
import NotFound from '@screens/NotFound';
import Individual from '@screens/Individual';

//recoil
import {useRecoilValue} from 'recoil';
// router
import {
  main,
  intro,
  globe,
  map,
  vr,
  messageList,
  messageCreate,
  messageUpdate,
  messageDetail,
  notFound,
  settings,
  notifications,
} from '@apis/router';
import {playingState} from '@apis/Recoil';

function App() {
  initToken();
  const [onPlay, setOnPlay] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null!);
  const recoilPlay = useRecoilValue(playingState);
  const handlePlay = () => {
    if (onPlay) {
      audioRef.current && audioRef.current.pause();
    } else {
      audioRef.current && audioRef.current.play();
    }
    setOnPlay(prev => !prev);
  };
  useEffect(handlePlay, [recoilPlay]);
  useEffect(() => {
    audioRef.current.volume = 0.4;
  }, []);

  return (
    <>
      {/* <InitMessage /> */}
      <BrowserRouter>
        {/* <RecoilRoot> */}
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path={intro()} element={<Intro />} />
            <Route path={main()} element={<Main />} />
            <Route path={globe()} element={<Globe />} />
            <Route path={map()} element={<Map />} />
            <Route path={vr()} element={<VR />} />
            <Route path={messageList()} element={<MessageList />} />
            <Route path={messageCreate()} element={<MessageCreate />} />
            <Route path={messageUpdate()} element={<MessageCreate />} />
            <Route path={messageDetail()} element={<MessageDetail />} />
            <Route path={notFound()} element={<NotFound />} />
            <Route path={settings()} element={<Individual />} />
            <Route path={notifications()} element={<Individual />} />
            {/* <Route path="/loading" element={<Loading />} /> */}
          </Routes>
        </Suspense>
        {/* </RecoilRoot> */}
      </BrowserRouter>
      <audio autoPlay loop src={bgm} ref={audioRef} />
    </>
  );
}
export default App;
