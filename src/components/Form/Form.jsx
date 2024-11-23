import React from "react";
import student from "../../assets/student1.png";

const Form = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <form className="bg-white p-2">
          <div className="img">
            <img src={student} alt="student" />
          </div>

          <div className="flex justify-center items-center flex-col my-5">
            <h1 className="text-3xl font-semibold">STUDENT SURVEY</h1>
            <p className="text-base">School Name</p>
          </div>

          <div className="p-10">
            <div className="flex flex-col gap-2">
              <label>Student Name</label>
              <div className="flex gap-6">
                <div className="w-1/2 flex flex-col gap-2">
                  <input
                    type="text"
                    className="border border-black px-2 py-2 outline-none rounded-md"
                  />
                  <p className="text-xs">First Name</p>
                </div>

                <div className="w-1/2 flex flex-col gap-2">
                  <input
                    type="text"
                    className="border border-black px-2 py-2 outline-none rounded-md"
                  />
                  <p className="text-xs">Last Name</p>
                </div>
              </div>
            </div>

            <div className="my-10">
              <div className="flex gap-6">
                <div className="w-1/2 flex flex-col gap-2">
                  <label>Date</label>
                  <input
                    type="date"
                    className="border border-black px-2 py-2 outline-none rounded-md"
                  />
                  <p className="text-xs">Date</p>
                </div>

                <div className="w-1/2 flex flex-col gap-2">
                  <label>How long have you been a student here?</label>
                  <select
                    name="select"
                    className="bg-white border border-black text-base py-[10px] p-2 rounded-md outline-none"
                  >
                    <option value="Please Select">Please Select</option>
                    <option value="Please Select">Less than a month</option>
                    <option value="Please Select">1-6 months</option>
                    <option value="Please Select">6 months to 1 year</option>
                    <option value="Please Select">More than 1 year</option>
                    <option value="Please Select">1-3 years</option>
                    <option value="Please Select">more than 3 years</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-gray-400 my-14 h-[1px]"></div>

            <div>
              <label className="text-lg font-semibold">
                Please rate the following aspects of your education.
              </label>

              <div className="mt-10 mb-5">
                <h2 className="my-5">Curriculum and classes for the term</h2>

                <table className="text-sm p-2">
                  <thead>
                    <tr>
                      <th className="p-3"></th>
                      <th className="px-6 border border-gray-400 bg-gray-200 w-10 py-3 font-normal text-sm">
                        Strongly Disagree
                      </th>
                      <th className="px-6 border border-gray-400 bg-gray-200 w-10 py-3 font-normal text-sm">
                        Disagree
                      </th>
                      <th className="px-6 border border-gray-400 bg-gray-200 w-10 py-3 font-normal text-sm">
                        Neutral
                      </th>
                      <th className="px-6 border border-gray-400 bg-gray-200 w-10 py-3 font-normal text-sm">
                        Agree
                      </th>
                      <th className="px-6 border border-gray-400 bg-gray-200 w-10 py-3 font-normal text-sm">
                        Strongly Agree
                      </th>
                    </tr>
                  </thead>
                  <tr className="text-center border border-gray-400">
                    <td className="w-52 px-3 text-left bg-gray-200 py-3">
                      The class descriptions accurately described the content.
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="one" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="one" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="one" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="one" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="one" />
                    </td>
                  </tr>
                  <tr className="text-center border border-gray-400">
                    <td className="w-52 px-3 text-left bg-gray-200 py-3">
                      I was academically prepared for the classes.
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="two" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="two" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="two" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="two" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="two" />
                    </td>
                  </tr>
                  <tr className="text-center border border-gray-400">
                    <td className="w-52 px-3 text-left bg-gray-200 py-3">
                      The class sizes were appropriate.
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="three" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="three" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="three" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="three" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="three" />
                    </td>
                  </tr>
                  <tr className="text-center border border-gray-400">
                    <td className="w-52 px-3 text-left bg-gray-200 py-3">
                      The classes started and ended on time.
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="four" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="four" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="four" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="four" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="four" />
                    </td>
                  </tr>
                  <tr className="text-center border border-gray-400">
                    <td className="w-52 px-3 text-left bg-gray-200 py-3">
                      The classes increased my knowledge of the subject matter.
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="five" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="five" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="five" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="five" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="five" />
                    </td>
                  </tr>
                  <tr className="text-center border border-gray-400">
                    <td className="w-52 px-3 text-left bg-gray-200 py-3">
                      The overall quality of the classes was excellent.
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="six" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="six" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="six" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="six" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="six" />
                    </td>
                  </tr>
                  <tr className="text-center border border-gray-400">
                    <td className="w-52 px-3 text-left bg-gray-200 py-3">
                      I would recommend these classes to other students.
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="seven" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="seven" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="seven" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="seven" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="seven" />
                    </td>
                  </tr>
                </table>
              </div>

              <div>
                <h2 className="my-5">Materials</h2>

                <table className="text-sm p-2">
                  <thead>
                    <tr>
                      <th className="p-3"></th>
                      <th className="px-6 border border-gray-400 bg-gray-200 w-10 py-3 font-normal text-sm">
                        Strongly Disagree
                      </th>
                      <th className="px-6 border border-gray-400 bg-gray-200 w-10 py-3 font-normal text-sm">
                        Disagree
                      </th>
                      <th className="px-6 border border-gray-400 bg-gray-200 w-10 py-3 font-normal text-sm">
                        Neutral
                      </th>
                      <th className="px-6 border border-gray-400 bg-gray-200 w-10 py-3 font-normal text-sm">
                        Agree
                      </th>
                      <th className="px-6 border border-gray-400 bg-gray-200 w-10 py-3 font-normal text-sm">
                        Strongly Agree
                      </th>
                    </tr>
                  </thead>
                  <tr className="text-center border border-gray-400">
                    <td className="w-52 px-3 text-left bg-gray-200 py-3">
                    The objectives and requirements for the classes were clearly stated.
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="eight" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="eight" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="eight" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="eight" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="eight" />
                    </td>
                  </tr>
                  <tr className="text-center border border-gray-400">
                    <td className="w-52 px-3 text-left bg-gray-200 py-3">
                    The textbooks and learning materials were relevant and useful.
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="nine" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="nine" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="nine" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="nine" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="nine" />
                    </td>
                  </tr>
                  <tr className="text-center border border-gray-400">
                    <td className="w-52 px-3 text-left bg-gray-200 py-3">
                    Tests and assignments were based on material covered in each class.
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="ten" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="ten" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="ten" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="ten" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="ten" />
                    </td>
                  </tr>
                  
                  </table>
              </div>

              <div>
                <h2 className="my-5">School environment</h2>

                <table className="text-sm p-2">
                  <thead>
                    <tr>
                      <th className="p-3"></th>
                      <th className="px-6 border border-gray-400 bg-gray-200 w-10 py-3 font-normal text-sm">
                        Strongly Disagree
                      </th>
                      <th className="px-6 border border-gray-400 bg-gray-200 w-10 py-3 font-normal text-sm">
                        Disagree
                      </th>
                      <th className="px-6 border border-gray-400 bg-gray-200 w-10 py-3 font-normal text-sm">
                        Neutral
                      </th>
                      <th className="px-6 border border-gray-400 bg-gray-200 w-10 py-3 font-normal text-sm">
                        Agree
                      </th>
                      <th className="px-6 border border-gray-400 bg-gray-200 w-10 py-3 font-normal text-sm">
                        Strongly Agree
                      </th>
                    </tr>
                  </thead>
                  <tr className="text-center border border-gray-400">
                    <td className="w-52 px-3 text-left bg-gray-200 py-3">
                    The physical classroom environments were clean and comfortable.
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="eleven" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="eleven" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="eleven" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="eleven" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="eleven" />
                    </td>
                  </tr>
                  <tr className="text-center border border-gray-400">
                    <td className="w-52 px-3 text-left bg-gray-200 py-3">
                    Library and on-site computers consistently made available.
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="twelve" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="twelve" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="twelve" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="twelve" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="twelve" />
                    </td>
                  </tr>
                  <tr className="text-center border border-gray-400">
                    <td className="w-52 px-3 text-left bg-gray-200 py-3">
                    The common spaces were clean and comfortable.
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="thirteen" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="thirteen" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="thirteen" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="thirteen" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="thirteen" />
                    </td>
                  </tr>

                  <tr className="text-center border border-gray-400">
                    <td className="w-52 px-3 text-left bg-gray-200 py-3">
                    The school communicated institutional goals and relevant news to students.
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="fourteen" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="fourteen" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="fourteen" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="fourteen" />
                    </td>
                    <td className="px-6 border border-gray-400 py-3">
                      <input type="radio" name="fourteen" />
                    </td>
                  </tr>
                  
                  </table>
              </div>
            </div>

            <div className="bg-gray-400 my-14 h-[1px]"></div>

            <div className="flex flex-col gap-2">
                <label>How likely are you to recommend our school to a friend or colleague?</label>
                <div>
                    <div className="flex gap-2 items-center">
                        <input type="radio" name="options" />
                        <p>Very Likely</p>
                    </div>

                    <div className="flex gap-2 items-center">
                        <input type="radio" name="options" />
                        <p>Somewhat Likely</p>
                    </div>

                    <div className="flex gap-2 items-center">
                        <input type="radio" name="options" />
                        <p>Unsure</p>
                    </div>

                    <div className="flex gap-2 items-center">
                        <input type="radio" name="options" />
                        <p>Not very likely</p>
                    </div>

                    <div className="flex gap-2 items-center">
                        <input type="radio" name="options" />
                        <p>Not Likely</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-3 my-10">
                <label>If not, why?</label>
                <textarea name="textarea" className="p-2 border border-black outline-none rounded-md" rows={7}></textarea>
            </div>

            <div className="flex flex-col gap-3 my-10">
                <label>What could we do to increase your level of satisfaction?</label>
                <textarea name="textarea" className="p-2 border border-black outline-none rounded-md" rows={7}></textarea>
            </div>

            <div className="flex flex-col gap-3 my-10">
                <label>Additional comments</label>
                <textarea name="textarea" className="p-2 border border-black outline-none rounded-md" rows={7}></textarea>
            </div>

            <div className="flex justify-center items-center">
                <button className="rounded-md bg-blue-400 px-16 py-3 hover:bg-blue-300 text-white">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
