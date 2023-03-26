import React from 'react';
import Header from '@/components/header';
import Head from 'next/head';
import Typewriter from 'typewriter-effect';

const Faq = () => {
  return (
    <div className="bg-gray-100 ">
    <Header />
      <div className="max-w-3xl mx-auto">
        <div  className="text-3xl font-bold mb-6" >
        <Typewriter
                    options={{
                        strings: ["Frequently Asked Questions:-"],
                        autoStart: true,
                        loop: true,
                    }}

                />
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow px-6 py-4">
            <h3 className="text-lg font-medium mb-2">Who are Neurodivergents?</h3>
            <p className="text-gray-700">
              Even though no two brains are alike, individuals whose brains are wired differently from the average or “neurotypical” person are referred to as Neurodivergents. ADHD, Autism, Dyspraxia, Dyslexia, Dyscalculia, Dysgraphia, and Tourette's syndrome are all examples of neurodiverse conditions.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow px-6 py-4">
            <h3 className="text-lg font-medium mb-2">How do I know if I am Neurodivergent?</h3>
            <p className="text-gray-700">
              There are several tests that can be found online but we recommend going to a mental health expert for proper diagnosis as such tests are often inaccurate.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow px-6 py-4">
            <h3 className="text-lg font-medium mb-2">Can I use tools designed for Neurodivergents even if I am not diagnosed?</h3>
            <p className="text-gray-700">
              YES! These tools are designed to help anyone who might find it difficult to perform their tasks efficiently.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow px-6 py-4">
            <h3 className="text-lg font-medium mb-2">How do I know if someone around me is Neurodivergent?</h3>
            <p className="text-gray-700">
              There is no certain way to tell for sure if someone is Neurodivergent since everyone has their own way of thinking and performing tasks, therefore such questions are better left to the psychiatrists and psychologists.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow px-6 py-4">
            <h3 className="text-lg font-medium mb-2">Is neurodivergence a disorder or a disability?</h3>
            <p className="text-gray-700">
              Neurodivergence is not inherently a disorder or a disability. It is simply a difference in neurological functioning. However, some neurodivergent individuals may experience significant challenges or impairments as a result of their condition.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow px-6 py-4">
            <h3 className="text-lg font-medium mb-2">What can I do to be more inclusive and supportive of neurodivergent individuals?</h3>
            <p className="text-gray-700">
              Some ways to be more inclusive and supportive of neurodivergent individuals include being patient and understanding, listening to their needs and experiences, avoiding stigmatizing language, providing accommodations and support when needed, and advocating for their rights and equal treatment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;