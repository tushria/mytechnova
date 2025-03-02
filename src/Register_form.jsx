import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from "./assets/data"
import './Register_form.css'

const Register_form = () => {
  // console.log(data);
  const { id } = useParams();
  const [memberCount, setMemberCount] = useState(2);
  const minCount = data[id - 1].min;
  const maxCount = data[id - 1].max;
  const [values, setValues] = useState({
    teamname: ""
  });

  useEffect(() => {
    // handle minimum and max members count here
    if (memberCount < minCount) {
      setMemberCount((temp)=>memberCount + 1);
    } else if (memberCount > maxCount) {
      setMemberCount((temp)=>memberCount - 1);
    }
  }, [minCount, maxCount, memberCount]);

  const [member1, setMember1] = useState({
    name: "",
    rollnum: null,
    branch: "",
    sem: null
  });
  const [member2, setMember2] = useState({
    name: "",
    rollnum: null,
    branch: "",
    sem: null
  });
  const [member3, setMember3] = useState({
    name: "",
    rollnum: null,
    branch: "",
    sem: null
  });
  const [member4, setMember4] = useState({
    name: "",
    rollnum: null,
    branch: "",
    sem: null
  });
  const [member5, setMember5] = useState({
    name: "",
    rollnum: null,
    branch: "",
    sem: null
  });

  const memberNameHandler = (e, count) => {
    const nameValue = e.target.value;
    switch (count) {
      case 1:
        setMember1({
          ...member1,
          name: nameValue
        })
        break;
      case 2:
        setMember2({
          ...member2,
          name: nameValue
        })
        break;
      case 3:
        setMember3({
          ...member3,
          name: nameValue
        })
        break;
      case 4:
        setMember4({
          ...member4,
          name: nameValue
        })
        break;
      case 5:
        setMember5({
          ...member5,
          name: nameValue
        })
        break;

      default:
        break;
    }
  }

  const memberRollNumHandler = (e, count) => {
    const rollNumValue = e.target.value;
    switch (count) {
      case 1:
        setMember1({
          ...member1,
          rollnum: rollNumValue
        })
        break;
      case 2:
        setMember2({
          ...member2,
          rollnum: rollNumValue
        })
        break;
      case 3:
        setMember3({
          ...member3,
          rollnum: rollNumValue
        })
        break;
      case 4:
        setMember4({
          ...member4,
          rollnum: rollNumValue
        })
        break;
      case 5:
        setMember5({
          ...member5,
          rollnum: rollNumValue
        })
        break;

      default:
        break;
    }
  }

  const memberBranchHandler = (e, count) => {
    const branchValue = e.target.value;
    switch (count) {
      case 1:
        setMember1({
          ...member1,
          branch: branchValue
        })
        break;
      case 2:
        setMember2({
          ...member2,
          branch: branchValue
        })
        break;
      case 3:
        setMember3({
          ...member3,
          branch: branchValue
        })
        break;
      case 4:
        setMember4({
          ...member4,
          branch: branchValue
        })
        break;
      case 5:
        setMember5({
          ...member5,
          branch: branchValue
        })
        break;

      default:
        break;
    }
  }

  const memberSemesterHandler = (e, count) => {
    const semesterValue = e.target.value;
    switch (count) {
      case 1:
        setMember1({
          ...member1,
          sem: semesterValue
        })
        break;
      case 2:
        setMember2({
          ...member2,
          sem: semesterValue
        })
        break;
      case 3:
        setMember3({
          ...member3,
          sem: semesterValue
        })
        break;
      case 4:
        setMember4({
          ...member4,
          sem: semesterValue
        })
        break;
      case 5:
        setMember5({
          ...member5,
          sem: semesterValue
        })
        break;

      default:
        break;
    }
  }

  const addMemberHandler = (e) => {
    e.preventDefault();
    if (memberCount >= maxCount) {
      alert("Not possible");
    } else {
      setMemberCount(memberCount + 1);
    }
  }

  const removeMemberHandler = (e) => {
    e.preventDefault();
    if (memberCount <= minCount) {
      alert("Not possible");
    } else {
      setMemberCount(memberCount - 1);
    }
  }

  const teamNameHandler = (e) => {
    setValues({
      teamname: e.target.value
    });
  }

  const register = (e) => {
    e.preventDefault();
    alert("Register");
  }


  return (
    <div>
      <div className="bodybill d-flex justify-content-center align-items-center">
        <div className="mx-auto col-md-8 col-lg-6 col-xlg-6 col-10 p-4 bg-light rounded-4 shadow border border-1 border-primary bg-opacity-50">
          <div className="text-center fs-1 text-primary mb-4 row">
            <div className="fs-3">TEAM REGISTRATION</div>
            <div className='text-uppercase my-3'>For event - {data[id - 1].title}</div>
            <span className='fs-5'>Minimum team size - {minCount} / Maximimum Team Size - {maxCount}</span>
          </div>
          <form onSubmit={register} className="row justify-content-center align-items-center" >
            <div className="input-group mb-3 col-12">
              <span className="input-group-text fs-2" id="basic-addon2"><i className="bi bi-person-lines-fill"></i></span>
              <input type="text" className="form-control fs-4" value={values.teamname} onChange={teamNameHandler} placeholder="Team Name" aria-describedby="basic-addon2" />
            </div>
            <div className='w-100'>
              <div className={memberCount > 0 ? 'row w-100 my-4' : 'd-none'}>
                <div className='col-4 pe-2 text-end fs-3 my-auto fw-bold'>Member 1: </div>
                <div className='col-8'>
                  <div className="input-group mb-3 w-100">
                    <span className="input-group-text fs-2" id="basic-addon2"><i className="bi bi-person-fill"></i></span>
                    <input type="text" className="form-control fs-4" value={member1.name} onChange={(e) => memberNameHandler(e, 1)} placeholder="Full Name" aria-describedby="basic-addon2" />
                  </div>
                  <div className="input-group mb-3 w-100">
                    <span className="input-group-text fs-2" id="basic-addon2"><i className="bi bi-person-lines-fill"></i></span>
                    <input type="number" className="form-control fs-4" value={member1.rollnum} onChange={(e) => memberRollNumHandler(e, 1)} placeholder="Roll Number" aria-describedby="basic-addon2" />
                  </div>
                  <div className="input-group mb-3 w-100">
                    <span className="input-group-text fs-2" id="basic-addon2"><i className="bi bi-journals"></i></span>
                    <input type="text" className="form-control fs-4" value={member1.branch} onChange={(e) => memberBranchHandler(e, 1)} placeholder="Course & Branch" aria-describedby="basic-addon2" />
                  </div>
                  <div className="input-group mb-3 w-100">
                    <span className="input-group-text fs-2" id="basic-addon2"><i className="bi bi-journal"></i></span>
                    <input type="number" className="form-control fs-4" value={member1.sem} onChange={(e) => memberSemesterHandler(e, 1)} placeholder="Semester" aria-describedby="basic-addon2" />
                  </div>
                </div>
              </div>
              <div className={memberCount > 1 ? 'row w-100 my-4' : 'd-none'}>
                <div className='col-4 pe-2 text-end fs-3 my-auto fw-bold'>Member 2: </div>
                <div className='col-8'>
                  <div className="input-group mb-3 w-100">
                    <span className="input-group-text fs-2" id="basic-addon2"><i className="bi bi-person-fill"></i></span>
                    <input type="text" className="form-control fs-4" value={member2.name} onChange={(e) => memberNameHandler(e, 2)} placeholder="Full Name" aria-describedby="basic-addon2" />
                  </div>
                  <div className="input-group mb-3 w-100">
                    <span className="input-group-text fs-2" id="basic-addon2"><i className="bi bi-person-lines-fill"></i></span>
                    <input type="number" className="form-control fs-4" value={member2.rollnum} onChange={(e) => memberRollNumHandler(e, 2)} placeholder="Roll Number" aria-describedby="basic-addon2" />
                  </div>
                  <div className="input-group mb-3 w-100">
                    <span className="input-group-text fs-2" id="basic-addon2"><i className="bi bi-journals"></i></span>
                    <input type="text" className="form-control fs-4" value={member2.branch} onChange={(e) => memberBranchHandler(e, 2)} placeholder="Course & Branch" aria-describedby="basic-addon2" />
                  </div>
                  <div className="input-group mb-3 w-100">
                    <span className="input-group-text fs-2" id="basic-addon2"><i className="bi bi-journal"></i></span>
                    <input type="number" className="form-control fs-4" value={member2.sem} onChange={(e) => memberSemesterHandler(e, 2)} placeholder="Semester" aria-describedby="basic-addon2" />
                  </div>
                </div>
              </div>
              <div className={memberCount > 2 ? 'row w-100 my-4' : 'd-none'}>
                <div className='col-4 pe-2 text-end fs-3 my-auto fw-bold'>Member 3: </div>
                <div className='col-8'>
                  <div className="input-group mb-3 w-100">
                    <span className="input-group-text fs-2" id="basic-addon2"><i className="bi bi-person-fill"></i></span>
                    <input type="text" className="form-control fs-4" value={member3.name} onChange={(e) => memberNameHandler(e, 3)} placeholder="Full Name" aria-describedby="basic-addon2" />
                  </div>
                  <div className="input-group mb-3 w-100">
                    <span className="input-group-text fs-2" id="basic-addon2"><i className="bi bi-person-lines-fill"></i></span>
                    <input type="number" className="form-control fs-4" value={member3.rollnum} onChange={(e) => memberRollNumHandler(e, 3)} placeholder="Roll Number" aria-describedby="basic-addon2" />
                  </div>
                  <div className="input-group mb-3 w-100">
                    <span className="input-group-text fs-2" id="basic-addon2"><i className="bi bi-journals"></i></span>
                    <input type="text" className="form-control fs-4" value={member3.branch} onChange={(e) => memberBranchHandler(e, 3)} placeholder="Course & Branch" aria-describedby="basic-addon2" />
                  </div>
                  <div className="input-group mb-3 w-100">
                    <span className="input-group-text fs-2" id="basic-addon2"><i className="bi bi-journal"></i></span>
                    <input type="number" className="form-control fs-4" value={member3.sem} onChange={(e) => memberSemesterHandler(e, 3)} placeholder="Semester" aria-describedby="basic-addon2" />
                  </div>
                </div>
              </div>
              <div className={memberCount > 3 ? 'row w-100 my-4' : 'd-none'}>
                <div className='col-4 pe-2 text-end fs-3 my-auto fw-bold'>Member 4: </div>
                <div className='col-8'>
                  <div className="input-group mb-3 w-100">
                    <span className="input-group-text fs-2" id="basic-addon2"><i className="bi bi-person-fill"></i></span>
                    <input type="text" className="form-control fs-4" value={member4.name} onChange={(e) => memberNameHandler(e, 4)} placeholder="Full Name" aria-describedby="basic-addon2" />
                  </div>
                  <div className="input-group mb-3 w-100">
                    <span className="input-group-text fs-2" id="basic-addon2"><i className="bi bi-person-lines-fill"></i></span>
                    <input type="number" className="form-control fs-4" value={member4.rollnum} onChange={(e) => memberRollNumHandler(e, 4)} placeholder="Roll Number" aria-describedby="basic-addon2" />
                  </div>
                  <div className="input-group mb-3 w-100">
                    <span className="input-group-text fs-2" id="basic-addon2"><i className="bi bi-journals"></i></span>
                    <input type="text" className="form-control fs-4" value={member4.branch} onChange={(e) => memberBranchHandler(e, 4)} placeholder="Course & Branch" aria-describedby="basic-addon2" />
                  </div>
                  <div className="input-group mb-3 w-100">
                    <span className="input-group-text fs-2" id="basic-addon2"><i className="bi bi-journal"></i></span>
                    <input type="number" className="form-control fs-4" value={member4.sem} onChange={(e) => memberSemesterHandler(e, 4)} placeholder="Semester" aria-describedby="basic-addon2" />
                  </div>
                </div>
              </div>
              <div className={memberCount > 4 ? 'row w-100 my-4' : 'd-none'}>
                <div className='col-4 pe-2 text-end fs-3 my-auto fw-bold'>Member 5: </div>
                <div className='col-8'>
                  <div className="input-group mb-3 w-100">
                    <span className="input-group-text fs-2" id="basic-addon2"><i className="bi bi-person-fill"></i></span>
                    <input type="text" className="form-control fs-4" value={member5.name} onChange={(e) => memberNameHandler(e, 5)} placeholder="Full Name" aria-describedby="basic-addon2" />
                  </div>
                  <div className="input-group mb-3 w-100">
                    <span className="input-group-text fs-2" id="basic-addon2"><i className="bi bi-person-lines-fill"></i></span>
                    <input type="number" className="form-control fs-4" value={member5.rollnum} onChange={(e) => memberRollNumHandler(e, 5)} placeholder="Roll Number" aria-describedby="basic-addon2" />
                  </div>
                  <div className="input-group mb-3 w-100">
                    <span className="input-group-text fs-2" id="basic-addon2"><i className="bi bi-journals"></i></span>
                    <input type="text" className="form-control fs-4" value={member5.branch} onChange={(e) => memberBranchHandler(e, 5)} placeholder="Course & Branch" aria-describedby="basic-addon2" />
                  </div>
                  <div className="input-group mb-3 w-100">
                    <span className="input-group-text fs-2" id="basic-addon2"><i className="bi bi-journal"></i></span>
                    <input type="number" className="form-control fs-4" value={member5.sem} onChange={(e) => memberSemesterHandler(e, 5)} placeholder="Semester" aria-describedby="basic-addon2" />
                  </div>
                </div>
              </div>
              <div className='w-100 row'>
                <button className={memberCount>=maxCount?'d-none btn btn-lg btn-success col-4 mx-auto':'btn btn-lg btn-success col-4 mx-auto'} onClick={addMemberHandler}>ADD MEMBER</button>
                <button className={memberCount<=minCount?'d-none btn btn-lg btn-danger col-4 mx-auto':'btn btn-lg btn-danger col-4 mx-auto'} onClick={removeMemberHandler}>REMOVE MEMBER</button>
              </div>
            </div>
            <button onClick={register} className="btn btn-primary btn-lg mt-4 fs-3">Register Team</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register_form
