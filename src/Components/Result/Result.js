// ResultPage.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaChartBar, FaCheckCircle, FaList, FaRobot } from 'react-icons/fa';
import AILoadingSimulation from '../Loading/AILoadingSimulation';

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state?.result || { 
    predicted_strategy: "No recommendation available", 
    probabilities: {} 
  };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Simulate 2 seconds of AI processing
    return () => clearTimeout(timer);
  }, []);

// Strategy implementation steps
const strategySteps = {
  "Scalable solutions": [
    {
      "title": "Designing a Modular AI Framework",
      "description": [
        "Implement AI architectures that allow for modular expansions (e.g., adding new algorithms or upgrading existing models).",
        "Use microservices-based AI applications to enable seamless integration of new features without disrupting ongoing processes.",
        "Ensure AI tools can interact with different laboratory instruments, software systems, and data sources."
      ]
    },
    {
      "title": "Cloud-Based AI Infrastructure",
      "description": [
        "Utilize cloud computing services to provide scalable storage and processing power for AI applications.",
        "Opt for hybrid cloud solutions that combine on-premises and cloud resources for flexibility.",
        "Implement auto-scaling mechanisms to dynamically allocate resources based on demand."
      ]
    },
    {
      "title": "Data Scalability and Management",
      "description": [
        "Establish data pipelines capable of handling increasing data volumes without bottlenecks.",
        "Use big data frameworks like Apache Hadoop or Spark for high-speed AI data processing.",
        "Implement real-time data streaming and batch processing capabilities."
      ]
    },
    {
      "title": "Scalable AI Model Deployment",
      "description": [
        "Use containerization technologies (e.g., Docker, Kubernetes) to enable easy AI model deployment across different environments.",
        "Train AI models with adaptive learning capabilities to improve accuracy as more data becomes available.",
        "Utilize federated learning techniques to allow multiple laboratories to collaboratively improve AI models without sharing sensitive data."
      ]
    },
    {
      "title": "Ensuring Hardware and Software Scalability",
      "description": [
        "Select hardware infrastructure (e.g., GPUs, TPUs) that can support AI workloads at increasing scales.",
        "Ensure laboratory software platforms (e.g., LIMS, ELN) are compatible with scalable AI tools.",
        "Regularly update AI algorithms to optimize performance with newer datasets and lab processes."
      ]
    },
    {
      "title": "Cost-Effective Expansion Strategies",
      "description": [
        "Implement AI solutions with pay-as-you-go models to optimize costs based on laboratory needs.",
        "Prioritize investments in AI technologies that offer both short-term efficiency and long-term scalability.",
        "Conduct cost-benefit analyses before scaling AI applications to ensure economic viability."
      ]
    },
    {
      "title": "Continuous Monitoring and Performance Optimization",
      "description": [
        "Use AI performance monitoring tools to track system efficiency and detect potential scalability issues.",
        "Conduct regular stress testing to evaluate how AI systems perform under varying workloads.",
        "Adjust AI models and infrastructure based on usage trends and evolving laboratory demands."
      ]
    }
  ],
  "Ethical compliance frameworks": [
    {
      "title": "Establishing Ethical AI Governance Policies",
      "description": [
        "Develop an AI ethics policy that defines principles such as fairness, transparency, accountability, and privacy.",
        "Assign an ethics committee or compliance officer to oversee AI implementation and ensure adherence to ethical standards.",
        "Align policies with global AI ethical guidelines, such as the OECD AI Principles, EU AI Act, and ISO/IEC 42001 AI Management Systems Standard."
      ]
    },
    {
      "title": "Ensuring Data Privacy and Security Compliance",
      "description": [
        "Implement strict data privacy protocols, including encryption and anonymization techniques.",
        "Ensure compliance with data protection regulations such as GDPR, HIPAA, and ISO 27001.",
        "Establish data access control policies to prevent unauthorized use of laboratory data."
      ]
    },
    {
      "title": "Bias Detection and Fairness Assurance",
      "description": [
        "Conduct regular audits to detect and mitigate biases in AI models, ensuring fair decision-making.",
        "Use diverse datasets to train AI models and prevent discrimination against specific sample types or populations.",
        "Implement explainable AI (XAI) techniques to ensure transparency in AI-driven laboratory analyses."
      ]
    },
    {
      "title": "Transparency and Explainability in AI Decision-Making",
      "description": [
        "Develop AI models with interpretable decision-making processes to enhance user trust.",
        "Provide documentation on how AI systems work, their limitations, and potential biases.",
        "Enable human-in-the-loop (HITL) processes, where human experts can review AI-generated results before final decisions are made."
      ]
    },
    {
      "title": "Regulatory Compliance and Standardization",
      "description": [
        "Ensure AI solutions comply with industry standards, including ISO 17025 for laboratory accreditation.",
        "Regularly update AI systems to reflect new regulatory requirements and ethical guidelines.",
        "Document all AI-related processes for auditability and certification purposes."
      ]
    },
    {
      "title": "Ethical AI Training and Awareness for Staff",
      "description": [
        "Conduct regular training programs to educate laboratory personnel on ethical AI usage and compliance requirements.",
        "Foster a culture of responsible AI implementation by encouraging ethical discussions and knowledge-sharing.",
        "Provide resources, such as AI ethics guidelines and best practices, to support informed decision-making."
      ]
    },
    {
      "title": "Continuous Monitoring and Risk Assessment",
      "description": [
        "Implement AI auditing mechanisms to evaluate system performance, compliance, and ethical risks.",
        "Develop an incident response plan to address ethical violations or AI-related issues.",
        "Regularly review AI models and policies to ensure alignment with ethical and regulatory updates."
      ]
    }
  ],
  "Staff training and upskilling": [
    {
      "title": "Needs Assessment and Skill Gap Analysis",
      "description": [
        "Conduct a skills audit to evaluate employees' current understanding of AI and related technologies.",
        "Identify knowledge gaps and areas requiring improvement.",
        "Determine specific roles and responsibilities in AI implementation (e.g., AI operators, data analysts, quality control specialists)."
      ]
    },
    {
      "title": "Develop a Comprehensive AI Training Program",
      "description": [
        "Basic AI Awareness Training: Introduce fundamental AI concepts, benefits, and potential risks in laboratory settings.",
        "Technical Training: Provide hands-on workshops on AI tools, data processing, and algorithm interpretation.",
        "Regulatory Compliance and Ethical Considerations: Train staff on data privacy, regulatory guidelines (ISO 17025, FDA, etc.), and ethical AI practices.",
        "Continuous Learning and Certification: Offer online courses, certifications, and collaborations with universities or AI training institutes."
      ]
    },
    {
      "title": "Hands-on Training and Practical Implementation",
      "description": [
        "Conduct interactive workshops, simulations, and real-case AI applications within the laboratory.",
        "Implement pilot projects where staff can practice AI integration in a controlled environment.",
        "Encourage cross-training among departments to ensure multidisciplinary expertise."
      ]
    },
    {
      "title": "Mentorship and Collaboration",
      "description": [
        "Assign AI experts or external consultants to mentor laboratory staff.",
        "Foster a knowledge-sharing culture where experienced employees can guide others.",
        "Encourage collaboration with AI researchers, software vendors, and academic institutions."
      ]
    },
    {
      "title": "Evaluate Training Effectiveness and Provide Feedback",
      "description": [
        "Conduct post-training assessments (quizzes, practical exams, or projects).",
        "Gather employee feedback on training content and delivery.",
        "Adjust training programs based on evolving AI advancements and laboratory needs."
      ]
    },
    {
      "title": "Establish a Continuous Learning Environment",
      "description": [
        "Develop AI knowledge-sharing forums, internal webinars, and newsletters.",
        "Keep staff updated on new AI trends, best practices, and emerging technologies.",
        "Encourage participation in AI conferences, workshops, and industry seminars."
      ]
    }
  ],
  "Overcoming financial barriers": [
    {
      "title": "Conducting Cost-Benefit and ROI Analysis",
      "description": [
        "Perform a detailed cost-benefit analysis to assess the financial feasibility of AI implementation.",
        "Identify direct and indirect cost savings from AI automation (e.g., reduced labor costs, improved efficiency, minimized errors).",
        "Calculate the expected ROI by comparing implementation costs with long-term gains in productivity and accuracy."
      ]
    },
    {
      "title": "Prioritizing Scalable and Modular AI Solutions",
      "description": [
        "Invest in cloud-based AI platforms with flexible subscription models (e.g., pay-as-you-go services).",
        "Adopt open-source AI tools and frameworks to minimize software licensing costs.",
        "Implement AI in phases, starting with high-impact, low-cost applications before expanding."
      ]
    },
    {
      "title": "Securing Funding and Grants",
      "description": [
        "Apply for government and industry grants that support AI research and implementation in laboratories.",
        "Seek funding from AI innovation programs, research collaborations, and technology development funds.",
        "Partner with universities and research institutions for joint AI projects with shared financial resources."
      ]
    },
    {
      "title": "Leveraging Public-Private Partnerships (PPPs)",
      "description": [
        "Collaborate with AI vendors, pharmaceutical companies, or research institutions for co-funded AI development.",
        "Explore sponsorships or joint ventures where external partners share implementation costs.",
        "Engage in AI pilot programs offered by technology companies for cost-effective trial implementations."
      ]
    },
    {
      "title": "Optimizing Resource Allocation",
      "description": [
        "Reallocate existing budgets by optimizing manual workflows that AI can automate.",
        "Reduce redundant spending on outdated technologies and invest in AI-driven efficiency improvements.",
        "Implement AI solutions in high-volume processes where automation yields the highest cost savings."
      ]
    },
    {
      "title": "Demonstrating Financial Viability to Stakeholders",
      "description": [
        "Develop business cases highlighting AI’s financial and operational benefits to secure internal funding.",
        "Present AI-driven success stories and case studies to gain executive buy-in for funding approvals.",
        "Establish key performance indicators (KPIs) to measure financial impact and justify continued investment."
      ]
    },
    {
      "title": "Continuous Monitoring and Cost Optimization",
      "description": [
        "Regularly assess AI system efficiency and adjust investments based on performance improvements.",
        "Implement AI cost-tracking mechanisms to optimize budget utilization.",
        "Update financial strategies based on technological advancements and funding opportunities."
      ]
    }
  ],
  "Data management protocols": [
    {
      "title": "Establishing Data Governance Policies",
      "description": [
        "Define clear policies for data ownership, access control, and usage within the laboratory.",
        "Assign data stewardship roles, such as data managers or AI system administrators, to oversee data governance.",
        "Ensure compliance with industry standards and regulations, such as ISO 17025, GDPR, HIPAA, or FDA requirements."
      ]
    },
    {
      "title": "Standardizing Data Collection and Storage",
      "description": [
        "Implement standardized data formats and metadata structures to ensure consistency.",
        "Utilize laboratory information management systems (LIMS) or electronic laboratory notebooks (ELN) for automated data entry and storage.",
        "Establish version control mechanisms to track changes and maintain data integrity."
      ]
    },
    {
      "title": "Data Cleaning and Preprocessing for AI Readiness",
      "description": [
        "Develop protocols for data validation to remove inconsistencies, duplicates, or missing values.",
        "Use AI-driven tools to automate data cleaning and preprocessing for improved accuracy.",
        "Ensure compatibility between AI algorithms and laboratory data formats to facilitate smooth processing."
      ]
    },
    {
      "title": "Implementing Secure Data Storage and Access Control",
      "description": [
        "Utilize encrypted cloud storage or secure on-premises servers for data protection.",
        "Implement role-based access control (RBAC) to restrict unauthorized data access.",
        "Regularly audit data access logs to detect and prevent security breaches."
      ]
    },
    {
      "title": "Ensuring Data Integrity and Traceability",
      "description": [
        "Adopt blockchain or digital ledger technologies to maintain tamper-proof data records.",
        "Use audit trails to track data modifications, ensuring accountability and reproducibility.",
        "Conduct periodic data integrity checks using checksum validation techniques."
      ]
    },
    {
      "title": "Data Sharing and Interoperability",
      "description": [
        "Develop standardized data-sharing protocols between AI systems, laboratory instruments, and external stakeholders.",
        "Use APIs (Application Programming Interfaces) to facilitate seamless data exchange between different platforms.",
        "Ensure that shared data adheres to regulatory guidelines and ethical considerations."
      ]
    },
    {
      "title": "Backup, Disaster Recovery, and Data Retention Policies",
      "description": [
        "Establish automated backup procedures with redundancy to prevent data loss.",
        "Develop a disaster recovery plan to restore critical data in case of system failures.",
        "Define data retention policies to determine how long data should be stored before deletion."
      ]
    },
    {
      "title": "Continuous Monitoring and Compliance Audits",
      "description": [
        "Conduct regular compliance audits to ensure adherence to data management protocols.",
        "Monitor AI-generated outputs to detect anomalies or potential biases in data interpretation.",
        "Update data management policies based on evolving AI regulations and laboratory requirements."
      ]
    }
  ]
  
};
 
const currentSteps = strategySteps[result.predicted_strategy] || [];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 py-12 px-4 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-2xl bg-gray-800/70 backdrop-blur-xl rounded-2xl p-8 shadow-2xl relative"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent text-center">
          AI Recommendation
        </h1>

        {isLoading && <AILoadingSimulation />}

        {!isLoading && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 80 }}
              className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-xl p-6 shadow-xl "
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaRobot className="text-4xl text-blue-400" />
                </motion.div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wide">AI Recommendation</p>
                  <p className="text-white text-xl capitalize font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                    {result.predicted_strategy}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Implementation Steps for recognized strategies */}
            {currentSteps.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 80 }}
                className="mt-6 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-xl p-6 shadow-xl"
              >
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {/* <FaList className="text-4xl text-blue-400" /> */}
                  </motion.div>
                  <div className="w-full">
                    <p className="text-gray-400 text-sm uppercase tracking-wide mb-4">Implementation Steps</p>
                    <div className="space-y-4">
                      {currentSteps.map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                          className="flex items-start gap-3"
                        >
                          <FaCheckCircle className="text-indigo-500 mt-1 flex-shrink-0" />
                        <div key={index}>
                        <p className="text-white font-semibold">{`${index + 1}. ${step.title}`}</p>
                        {step.description.map((desc, descIndex) => (
                          <p key={descIndex} className="text-gray-300 text-sm">
                            {desc}
                          </p>
                        ))}
                      </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 80 }}
              className="mt-6 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-xl p-6 shadow-xl  "
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* <FaChartBar className="text-4xl text-blue-400" /> */}
                </motion.div>
                <div className="w-full">
                  <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Prediction Probabilities</p>
                  <div className="space-y-4">
                    {Object.entries(result.strategy_percentages).map(([key, value], index) => (
                      <div key={index} className="flex flex-col gap-1">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium text-sm">{key}</span>
                          <span className="text-blue-300 text-sm font-semibold">
                            {(value ).toFixed(2)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${value }%` }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full mt-6 py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-gray-700 transition-all duration-300"
          onClick={() => navigate('/')}
        >
          New Recommendation
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ResultPage;