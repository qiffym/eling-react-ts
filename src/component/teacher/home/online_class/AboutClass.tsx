import React from 'react';
import logosmk from '../../../../assets/images/smkn3mlg150x150.png';

export const AboutClass = () => {
  return (
    <>
      <section id="about-class">
        <div className="container mx-auto bg-slate-200 w-11/12 px-5 py-3 border-4 border-slate-200 rounded-box">
          {/* Tentang Aplikasi */}
          <section id="about-app" className="mb-8">
            <div className="flex items-center space-x-2 mb-3">
              <div>
                <img src={logosmk} alt="logo_smk" width={75} />
              </div>
              <div className="flex flex-col text-lg">
                <p>e-Learning</p>
                <p className="font-semibold">SMK Negeri 3 Malang</p>
              </div>
            </div>
            <p className="w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              eum deleniti odio et laborum in minus hic. Ullam, quas deleniti
              tempora neque quam facilis dolore, unde eum sunt ad excepturi
              perspiciatis quia doloremque distinctio ducimus.
            </p>
          </section>

          {/* Tentang Online Class */}
          <section id="about-online-class">
            {/* Deskripsi */}
            <div id="description">
              <h2 className="title text-2xl font-bold mb-4">
                Tentang Kelas Online
              </h2>
              <p className="w-4/5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit explicabo ut corporis placeat rerum odit aut beatae
                officia veritatis similique commodi, laudantium recusandae sunt
                eos officiis tenetur quod nulla inventore et, consequatur libero
                voluptatibus. Sequi autem suscipit earum exercitationem sunt
                libero eveniet necessitatibus.
              </p>
            </div>

            <hr className="border-t-2 border-slate-400 w-4/5 my-3" />

            <div id="student">
              <h2 className="title text-2xl font-bold mb-4">Siswa</h2>
              <p className="mb-3">
                Total siswa:{' '}
                <span className="badge badge-lg bg-teal-600 font-bold">30</span>
              </p>

              {/* Data Siswa */}
              <div className="overflow-x-auto w-4/5">
                <table className="table table-compact w-full">
                  <tbody>
                    {/* List Pertema */}
                    <tr className="hover">
                      {/* Nomor */}
                      <th className="text-center">1</th>

                      {/* Avatar + Nama */}
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={logosmk}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">Hart Hagerty</div>
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* List Kedua */}
                    <tr className="hover">
                      {/* Nomor */}
                      <th className="text-center">2</th>

                      {/* Avatar + Nama */}
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={logosmk}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">
                              Qiff Ya Muhammad bin Fardan bin Muhammad Abadan
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
