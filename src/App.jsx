import React from 'react'
import Sidebar from './components/Sidebar'
import Button from './components/Button'

const App = () => {
  return (
    <>
      <div className=" px-2">
        <div className="flex flex-col sm:flex-row">
          <div className="min-w-[250px] min-h-[100vh]">
            <Sidebar />
          </div>
          <div className="flex-1 min-h-[100vh]">
            <div className='px-10 py-10'>
              <h1 className="mb-10 text-3xl font-Poppins font-semibold">Buttons</h1>


              <div className='flex gap-x-20 gap-y-12 mb-12 flex-wrap'>
                <div>
                  <pre className='mb-2'>
                    &lt;button/&gt;
                  </pre>
                  <Button />
                </div>
                
              </div>

              <div className='flex gap-x-20 gap-y-12 mb-12 flex-wrap'>
                <div>
                  <pre className='mb-2'>
                    &lt;button variant='outline'  /&gt;
                  </pre>
                  <Button variant='outline'/>
                </div>
               
              </div>


              <div className='flex gap-x-20 gap-y-12 mb-12 flex-wrap'>
                <div>
                  <pre className='mb-2'>
                    &lt;button variant='text' /&gt;
                  </pre>
                  <Button variant='text' />
                </div>
               
              </div>


              <div className='flex gap-x-20 gap-y-12 mb-12 flex-wrap'>
                <div>
                  <pre className='mb-2'>
                    &lt;button disableShadow/&gt;
                  </pre>
                  <Button />
                </div>
              
              </div>


              <div className='flex gap-x-20 gap-y-12 mb-12 flex-wrap'>
                <div>
                  <pre className='mb-2'>
                    &lt;button disabled /&gt;
                  </pre>
                  <Button disabled/>
                </div>
                <div>
                  <pre className='mb-2'>
                    &lt;button variant='text' disabled /&gt;
                  </pre>
                  <Button variant='text' disabled/>
                </div>
              </div>


              <div className='flex gap-x-20 gap-y-12 mb-12 flex-wrap'>
                <div>
                  <pre className='mb-2'>
                    &lt;button startIcon='fa-solid fa-cart-shopping' /&gt;
                  </pre>
                  <Button startIcon='fa-solid fa-cart-shopping'/>
                </div>
                <div>
                  <pre className='mb-2'>
                    &lt;button endIcon='fa-solid fa-cart-shopping' /&gt;
                  </pre>
                  <Button endIcon='fa-solid fa-cart-shopping'/>
                </div>
              </div>


              <div className='flex gap-x-20 gap-y-12 mb-12 flex-wrap'>
                <div>
                  <pre className='mb-2'>
                    &lt;button size='sm' /&gt;
                  </pre>
                  <Button size='sm'/>
                </div>
                <div>
                  <pre className='mb-2'>
                    &lt;button size='md' /&gt;
                  </pre>
                  <Button size='md' />
                </div>
                <div>
                  <pre className='mb-2'>
                    &lt;button size='lg' /&gt;
                  </pre>
                  <Button size='lg' />
                </div>
              </div>


              <div className='flex gap-5 flex-wrap mb-12'>
                <div>
                  <pre className='mb-2'>
                    &lt;button color='default' /&gt;
                  </pre>
                  <Button color='default'/>
                </div>
                <div>
                  <pre className='mb-2'>
                    &lt;button color='primary' /&gt;
                  </pre>
                  <Button color='primary' />
                </div>
                <div>
                  <pre className='mb-2'>
                    &lt;button color='secondary' /&gt;
                  </pre>
                  <Button color='secondary'/>
                </div>
                <div>
                  <pre className='mb-2'>
                    &lt;button color='danger' /&gt;
                  </pre>
                  <Button color='danger' />
                </div>
              </div>


            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App