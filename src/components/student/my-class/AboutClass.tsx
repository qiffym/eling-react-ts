import React, { FC } from 'react';
// import logosmk from '../../../assets/images/smkn3mlg150x150.png';

type Props = {
  about?: string;
  student?: [
    {
      avatar?: string;
      name?: string;
      nis?: string;
    },
  ];
  total?: number;
};

const AboutClass: FC<Props> = ({ about, student, total }) => (
  <section id="about-class" className="mb-20">
    <div className="container mx-auto w-11/12 px-5 py-3 shadow-xl border-l-4 border-l-primary rounded-box bg-white">
      {/* Tentang Aplikasi */}
      {/* <section id="about-app" className="mb-8">
        <div className="flex items-center space-x-2 p-3">
          <div className="mask mask-circle w-20 h-20">
            <img src={logosmk} alt="logo_smk" />
          </div>
          <div className="flex flex-col -space-y-1">
            <p>e-Learning</p>
            <p className="font-semibold">
              <span>SMEKA</span>NEGAMA
            </p>
          </div>
        </div>
        <p className="w-full lg:w-4/5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eum
          deleniti odio et laborum in minus hic. Ullam, quas deleniti tempora
          neque quam facilis dolore, unde eum sunt ad excepturi perspiciatis
          quia doloremque distinctio ducimus.
        </p>
      </section> */}

      {/* Tentang Online Class */}
      <section id="about-online-class">
        {/* Deskripsi */}
        <div id="description" className="max-w-4xl">
          <h2 className="title text-2xl font-bold mb-4">
            Tentang Kelas Online
          </h2>
          <p className="max-w-max btn-ghost rounded-sm transition-all duration-75 cursor-pointer">
            {about ?? 'No Description'}
          </p>
        </div>

        <hr className="border-t-2 border-slate-400 w-full lg:w-4/5 my-3" />

        <div id="student">
          <h2 className="title text-2xl font-bold mb-4">Siswa</h2>
          <p className="mb-3">
            Total siswa:{' '}
            <span className="badge badge-lg bg-teal-600 font-bold">
              {total}
            </span>
          </p>

          {/* Data Siswa */}
          <div className="overflow-x-auto w-full lg:w-4/5">
            <table className="table table-compact w-full">
              <tbody>
                {/* List Kedua */}
                {student?.map((item, index) => (
                  <tr key={item.name} className="hover">
                    {/* Nomor */}
                    <th className="text-center">{index + 1}</th>

                    {/* Avatar + Nama */}
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-circle w-10 lg:w-12 h-10 lg:h-12">
                            <img
                              src={item.avatar}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.name}</div>
                          <div className="text-sm opacity-50">{item.nis}</div>
                        </div>
                      </div>
                    </td>
                    <td />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  </section>
);

export default AboutClass;
