/* eslint-disable no-console */
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ParentProfile.css';

export default function ParentProfile() {
  const parent = useSelector((store) => store.parentStore);

  const dispatch = useDispatch();

  const handlePublish = async () => {
    await fetch('http://localhost:3001/profile/parent', {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ published: parent.profile.published, id: parent.profile.id }),
    })
      .then((res) => res.json())
      .then((res) => dispatch({ type: 'PARENT_PROFILE', payload: res.profile }));
  };

  const [img, setImg] = useState(null);

  const sendFile = async (el) => {
    try {
      const data = new FormData();
      data.append('avatar', img);
      data.append('id', el);
      data.append('parent', parent.profile.id);
      await axios.post(`http://localhost:3001/profile/uploadPet/${el}`, data, {
        headers: {
          'content-type': 'mulpipart/form-data',
        },
      })
        .then((res) => {
          console.log(res);
          dispatch({ type: 'PET', payload: res.data.allPet });
        });
    } catch (error) {
      console.log(error);
    }
  };
  const [img1, setImg1] = useState(null);

  const sendFile1 = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('avatar', img1);
      data.append('id', parent.profile.id);

      await axios.post('http://localhost:3001/profile/uploadparent1', data, {
        headers: {
          'content-type': 'mulpipart/form-data',
        },
      })
        .then((res) => {
          console.log(res);
          dispatch({ type: 'PARENT_PROFILE', payload: res.data.addPhoto1 });
        });
    } catch (error) {
      console.log(error);
    }
  };

  const [img2, setImg2] = useState(null);

  const sendFile2 = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('avatar', img2);
      data.append('id', parent.profile.id);

      await axios.post('http://localhost:3001/profile/uploadparent2', data, {
        headers: {
          'content-type': 'mulpipart/form-data',
        },
      })
        .then((res) => {
          console.log(res);
          dispatch({ type: 'PARENT_PROFILE', payload: res.data.addPhoto2 });
        });
    } catch (error) {
      console.log(error);
    }
  };

  const [img3, setImg3] = useState(null);

  const sendFile3 = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('avatar', img3);
      data.append('id', parent.profile.id);

      await axios.post('http://localhost:3001/profile/uploadparent3', data, {
        headers: {
          'content-type': 'mulpipart/form-data',
        },
      })
        .then((res) => {
          console.log(res);
          dispatch({ type: 'PARENT_PROFILE', payload: res.data.addPhoto3 });
        });
    } catch (error) {
      console.log(error);
    }
  };

  const [img4, setImg4] = useState(null);

  const sendFile4 = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('avatar', img4);
      data.append('id', parent.profile.id);

      await axios.post('http://localhost:3001/profile/uploadparent4', data, {
        headers: {
          'content-type': 'mulpipart/form-data',
        },
      })
        .then((res) => {
          console.log(res);
          dispatch({ type: 'PARENT_PROFILE', payload: res.data.addPhoto4 });
        });
    } catch (error) {
      console.log(error);
    }
  };

  const [img5, setImg5] = useState(null);

  const sendFile5 = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('avatar', img5);
      data.append('id', parent.profile.id);

      await axios.post('http://localhost:3001/profile/uploadparent5', data, {
        headers: {
          'content-type': 'mulpipart/form-data',
        },
      })
        .then((res) => {
          console.log(res);
          dispatch({ type: 'PARENT_PROFILE', payload: res.data.addPhoto5 });
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container_ParentProfile">
      {parent?.profile ? (
        <div className="container_ParentProfile_info">
          <div className="ParentProfile_info_main">
            <h3>?????? ??????????????</h3>
            <div className="ParentProfile_published">
              {parent?.profile.published
                ? <button className="published_false" type="button" onClick={handlePublish}>???? ??????????????????????</button>
                : <button className="published_true" type="button" onClick={handlePublish}>??????????????????????</button>}
            </div>
          </div>
          <div className="Parent_profile_photoadd">
            <div className="SitterProfile_photos_addPhoto">
              <div className="SitterProfile_photo">
                {
              parent
                ? <img className="logo" src={`http://localhost:3001/${parent.profile?.parentPh1}`} alt="avatar" />
                : <img className="logo" src={`http://localhost:3001/${parent.profile?.parentPh1}`} alt="avatar" />
            }
              </div>
              <div>
                <input type="file" onChange={(e) => setImg1(e.target.files[0])} />
              </div>
              <div>
                <button className="btn_subb" type="button" onClick={sendFile1}>????????????????</button>
              </div>
            </div>
            <div className="SitterProfile_photos_addPhoto">
              <div className="SitterProfile_photo">
                {
              parent
                ? <img className="logo" src={`http://localhost:3001/${parent.profile?.parentPh2}`} alt="avatar" />
                : <img className="logo" src={`http://localhost:3001/${parent.profile?.parentPh2}`} alt="avatar" />
            }
              </div>
              <div>
                <input type="file" onChange={(e) => setImg2(e.target.files[0])} />
              </div>
              <div>
                <button className="btn_subb" type="button" onClick={sendFile2}>????????????????</button>
              </div>
            </div>
            <div className="SitterProfile_photos_addPhoto">
              <div className="SitterProfile_photo">
                {
              parent
                ? <img className="logo" src={`http://localhost:3001/${parent.profile?.parentPh3}`} alt="avatar" />
                : <img className="logo" src={`http://localhost:3001/${parent.profile?.parentPh3}`} alt="avatar" />
            }
              </div>
              <div>
                <input type="file" onChange={(e) => setImg3(e.target.files[0])} />
              </div>
              <div>
                <button className="btn_subb" type="button" onClick={sendFile3}>????????????????</button>
              </div>
            </div>
            <div className="SitterProfile_photos_addPhoto">
              <div className="SitterProfile_photo">
                {
              parent
                ? <img className="logo" src={`http://localhost:3001/${parent.profile?.parentPh4}`} alt="avatar" />
                : <img className="logo" src={`http://localhost:3001/${parent.profile?.parentPh4}`} alt="avatar" />
            }
              </div>
              <div>
                <input type="file" onChange={(e) => setImg4(e.target.files[0])} />
              </div>
              <div>
                <button className="btn_subb" type="button" onClick={sendFile4}>????????????????</button>
              </div>
            </div>
            <div className="SitterProfile_photos_addPhoto">
              <div className="SitterProfile_photo">
                {
              parent
                ? <img className="logo" src={`http://localhost:3001/${parent.profile?.parentPh5}`} alt="avatar" />
                : <img className="logo" src={`http://localhost:3001/${parent.profile?.parentPh5}`} alt="avatar" />
            }
              </div>
              <div>
                <input type="file" onChange={(e) => setImg5(e.target.files[0])} />
              </div>
              <div>
                <button className="btn_subb" type="button" onClick={sendFile5}>????????????????</button>
              </div>
            </div>
          </div>
          <div className="ParentProfile_info_title">
            <h4>??????????????????</h4>
            <span>{parent.profile.title}</span>
          </div>
          <div className="ParentProfile_info_list">
            <div className="list_introduction">
              <h4>?? ????????</h4>
              <p>{parent.profile.introduction}</p>
            </div>
            <div className="list_introduction">
              <h4>???????? ????????????</h4>
              <p>{parent.profile.country}</p>
            </div>
            <div className="list_introduction">
              <h4>?????? ??????????</h4>
              <p>{parent.profile.city}</p>
            </div>
            <div className="list_ilocation">
              <h4>??????&??????????????</h4>
              <p>{parent.profile.location}</p>
            </div>
            <div className="list_resp">
              <h4>??????????????????????</h4>
              <p>{parent.profile.responsibilities}</p>
            </div>
          </div>
          <div className="ParentProfile_info_dates">
            <h4>???????????? ??????????:</h4>
            <p>?? {parent.profile.dateSince1} ???? {parent.profile.dateUntil1}</p>
            {parent.profile.dateSince2
              ? (
                <p>{parent.profile.dateSince2}/{parent.profile.dateUntil2}</p>
              )
              : null}
            {parent.profile.dateSince3
              ? (
                <p>{parent.profile.dateSince3}/{parent.profile.dateUntil3}</p>
              )
              : null}
          </div>
          <div className="ParentProfile_info_pets">
            <h4>???????? ??????????????:</h4>
            <div className="petContainer">
              {parent.pet?.map((el) => (
                <div key={el.id} className="petContainer_card">
                  <div className="petContainer_photo">
                    <div className="petContainer_photo_pet_photo">
                      {
              parent.pet
                ? <img className="logo" src={`http://localhost:3001/${el.petPhoto}`} alt="avatar" />
                : <img className="logo" src={`http://localhost:3001/${el.petPhoto}`} alt="avatar" />
            }
                    </div>
                    <div>
                      <input type="file" onChange={(e) => setImg(e.target.files[0])} />
                    </div>
                    <div>
                      <button className="btn_subb" type="button" onClick={() => sendFile(el.id)}>????????????????</button>
                    </div>
                  </div>
                  <div className="petContainer_petName"><p>{el?.petName}</p></div>
                  <div className="petContainer_petAge"><p>{el?.petAge} ??????</p></div>
                </div>
              ))}
            </div>
            <div>
              <Link to="/profile/parent/update-parent-profile">
                <button className="btn_subb" type="button">???????????????? ???????????? ??????????????</button>
              </Link>
            </div>
          </div>
        </div>
      )
        : (
          <div className="btn_add_prifile">
            <div className="btn_add_prifile_p">
              <p>
                ?? ?????? ?????? ?????? ?????????????????????? ????????????.
              </p>
            </div>
            <div>
              <Link to="/profile/create-parent-profile">
                <button className="btn_subb" type="button">?????????????????? ????????????</button>
              </Link>
            </div>
          </div>
        )}
    </div>
  );
}
