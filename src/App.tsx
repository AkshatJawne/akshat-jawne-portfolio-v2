import React from 'react';
import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import CubeAnimation from './components/CubeAnimation/CubeAnimation';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import { useLoading } from './hooks/useLoading';

const App: React.FC = () => {
  const isLoading = useLoading(1500);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <CubeAnimation />
      <Layout>
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Skills />
      </Layout>
    </>
  );
};

export default App;