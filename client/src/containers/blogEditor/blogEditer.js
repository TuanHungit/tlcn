import React, { useState } from 'react';
import QuillEditor from '../../components/blogs/editor/quilllEditor';
import axios from '../../common/axios-order';
import alertify from 'alertifyjs';
export default (props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState([]);
  const onEditorChange = (value) => {
    setContent(value);
    console.log(content);
  };
  const onFilesChange = (files) => {
    setFiles(files);
  };
  const onSubmit = (event) => {
    event.preventDefault();

    setContent('');

    const variables = {
      content: content,
      title: title,
    };
    console.log(variables);
    axios
      .post('/blogs', variables)
      .then((response) => {
        if (response) {
          alertify.success('Post Created!');

          setTimeout(() => {
            props.history.push('/blog');
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='body-inner'>
      <div class='main-wrapper scrollspy-container'>
        <section
          class='page-wrapper page-detail pt-100'
          style={{ backgroundColor: '#f3f3f3' }}
        >
          <div style={{ maxWidth: '1000px', margin: '1rem auto' }}>
            <div style={{ textAlign: 'center' }}>Tạo Blog</div>
            <label>Tiêu đề:</label>
            <input
              placeholder='Nhập tiêu đề blog'
              onChange={(event) => setTitle(event.target.value)}
            />
            <QuillEditor
              placeholder={'Start Posting Something'}
              onEditorChange={onEditorChange}
              onFilesChange={onFilesChange}
            />

            <form onSubmit={onSubmit}>
              <div style={{ textAlign: 'center', margin: '2rem' }}>
                <button type='submit' className='btn' onSubmit={onSubmit}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};
