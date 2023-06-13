import React from "react";
import CommonSection from "../shared/CommonSectionAbout";
import Newsletter from "../shared/Newsletter";
import "../styles/about.css";

const About = () => {
  return (
    <>
      <CommonSection title={"About Disability"} />
      <div>
        <details open>
          <summary>What is Disability?</summary>
          <p>
            Persons with disabilities are persons with long-term physical, mental, intellectual or sensory disabilities who in interacting with their environment and societal attitudes may encounter barriers that make it difficult to
            participate fully and effectively on the basis of equal rights.
          </p>
        </details>

        <details>
          <summary>What causes Disability?</summary>
          <p>
            There are several factors that cause disability including:
            <br />
            1. Central nervous system dysfunction.
            <br />
            2. Disorders of the neuromusculoskeletal system eg, paraplegia effects, quadriplegia, muscular dystrophy, motor neuron disease, neuromuscular disorders, cerebral palsy, absence or deformity of limbs, spina bifida, arthritis,
            back disorders, ataxia, bone formation or degeneration, scoliosis.
            <br />
            3. Brain damage acquired after birth.
            <br />
            4. Nervous system disorders that occur after birth, including epilepsy and organic dementia (e.g. Alzheimer's disease) as well as conditions such as multiple sclerosis and Parkinson's disease.
            <br />
            5. Multiple sensory impairments associated with severe restrictions in communication, and participation in people's lives.
            <br />
            6. Blindness and visual impairment.
            <br />
          </p>
        </details>

        <details>
          <summary>Types of Disability</summary>
          <p>
            - Visual impairment.
            <br />
            - Deaf or Hard of Hearing.
            <br />
            - Mental Health Conditions.
            <br />
            - Intellectual Disability.
            <br />
            - Brain injury after birth.
            <br />
            - Autism spectrum disorders.
            <br />- Physical Disability
          </p>
        </details>

        <details>
          <summary>Disability Rights</summary>
          <p>
            There are four principles that can ensure the convenience or accessibility of persons with disabilities that absolutely must be met, which are as follows:
            <br />
            - The principle of ease, that is, everyone can reach all places or buildings of a general nature in an environment.
            <br />
            - The principle of usefulness, that is, everyone can use all places or buildings that are common in an environment.
            <br />
            - Safety principle, that every building in a built environment must pay attention to safety for all people including disabilities.
            <br />- The principle of self-reliance, that is, everyone must be able to reach and enter to use all places or buildings in an environment without needing the help of others.
          </p>
        </details>
      </div>
      <Newsletter />
    </>
  );
};

export default About;
