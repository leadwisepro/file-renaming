import React from 'react';
import { Container } from './components/layout/Container';
import { Header } from './components/layout/Header';
import { FileUploader } from './components/files/FileUploader';
import { FileList } from './components/files/FileList';
import { FileActions } from './components/files/FileActions';

function App() {
  return (
    <Container>
      <Header />
      <main className="space-y-6">
        <FileUploader />
        <FileList />
        <FileActions />
      </main>
    </Container>
  );
}

export default App;