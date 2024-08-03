import React from "react";
import ElementBackground from "../../components/elementBackground/ElementBackground";

const InputSection = ({
  text,
  isLoading,
  handleInputChange,
  handlerSendCustomerNeeds,
  handlerSuggestProfile,
  textareaRef,
  background,
}) => {
  return (
    <section
      id='landing-profile'
      className=' h-screen w-screen text-center relative overflow-hidden flex flex-col flex-grow justify-end pb-10'
    >
      <div className='w-full md:pt-0 md:border-transparent md:dark:border-transparent '>
        <div className='text-base px-3 md:px-4 m-auto lg:px-1 xl:px-5 '>
          {!isLoading && (
            <>
              <div
                style={{
                  boxShadow: "#303030 0px 25px 13px 0px",
                }}
                className='mx-auto flex flex-col flex-1 gap-4 text-base md:gap-5 lg:gap-7 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[60rem] bg-[#1e1f1f] rounded-3xl py-7 px-10'
              >
                <div className='flex [&>button]:rounded-md  mx-auto gap-x-5 [&>button]:p-2 [&>button]:border-white [&>button]:border w-full justify-evenly'>
                  <button
                    id='btn'
                    className='text-white border-2 border-white bg-white/5 backdrop-blur-sm text-sm rounded font-medium px-12 py-2 inline-block 
                hover:bg-white hover:text-black transition-colors'
                    onClick={handlerSuggestProfile}
                    value='Profesionista'
                  >
                    Generar Perfil Profesional
                  </button>
                  <button
                    id='btn'
                    className='text-white border-2 border-white bg-white/5 backdrop-blur-sm text-sm rounded font-medium px-12 py-2 inline-block 
                hover:bg-white hover:text-black transition-colors'
                    onClick={handlerSuggestProfile}
                    value='Familiar'
                  >
                    Generar Perfil Familiar
                  </button>
                  <button
                    id='btn'
                    className='text-white border-2 border-white bg-white/5 backdrop-blur-sm text-sm rounded font-medium px-12 py-2 inline-block 
                hover:bg-white hover:text-black transition-colors'
                    onClick={handlerSuggestProfile}
                    value='General'
                  >
                    Generar Perfil General
                  </button>
                </div>
                <div className='relative text-center text-xs text-white '>
                  <span>
                    Describe tu perfil o elige generar uno de los 3 sugeridos.
                    Después, si lo deseas, puedes editarlo para ajustarlo a tus
                    necesidades.
                  </span>
                </div>
                <form onSubmit={handlerSendCustomerNeeds} className='w-full'>
                  <div className='relative flex h-full max-w-full flex-1 flex-col '>
                    <div className='flex w-full items-center flex-col'>
                      <div className='flex w-full flex-col gap-1.5 rounded-[26px] bg-[#424242] py-2 pl-5 pr-1.5'>
                        <div className='flex items-center gap-1.5 md:gap-2'>
                          <div className='flex min-w-0 flex-1 flex-col'>
                            <textarea
                              ref={textareaRef}
                              value={text}
                              onChange={handleInputChange}
                              rows='1'
                              placeholder='Proporciona tus gustos, preferencias y necesidades'
                              className='m-0 resize-none border-0 bg-transparent px-0 focus:ring-0 focus:outline-none focus:border-transparent max-h-96 overflow-hidden'
                            ></textarea>
                          </div>

                          <button
                            className='mb-1 me-1 flex h-8 w-8 items-center justify-center rounded-full  text-white transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:outline-black disabled:bg-[#979797] disabled:text-[#afafaf] dark:bg-white dark:text-black dark:focus-visible:outline-white disabled:dark:bg-token-text-quaternary dark:disabled:text-token-main-surface-secondary'
                            type='submit'
                            disabled={!text}
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='32'
                              height='32'
                              fill='none'
                              viewBox='0 0 32 32'
                              className='icon-2xl'
                            >
                              <path
                                fill='currentColor'
                                d='M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z'
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
        <div className='absolute top-0 left-0 w-full h-screen -z-10 '>
          <ElementBackground
            alt='background-image'
            sourceElement={background}
          />
        </div>
      </div>
    </section>
  );
};

export default InputSection;
