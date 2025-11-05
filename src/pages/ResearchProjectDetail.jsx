import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './ResearchProjectDetail.css'

const ResearchProjectDetail = () => {
  const { id } = useParams()

  const projectDetails = {
    'cold-chain': {
      title: "COLD CHAIN RESERVE DASHBOARD",
      subtitle: "A Real Time Dashboard to Visually Represent the Quantity of Produced and Stored Goods",
      type: "Research",
      paperLink: "https://doi.org/your-paper-link",
      abstract: "Due to insufficient logistical support and shortage of refrigerated storage, 25-30% of India's produce goes to waste. This solution provides a real-time dashboard for cold chain operators to visually present information about produced or required goods based on demand and location, with demand forecasting capabilities to optimize storage and reduce wastage.",
      sections: [
        {
          title: "PROBLEM STATEMENT",
          content: "India ranks second in world produce but faces 25-30% wastage due to insufficient cold storage and logistics. Products with short expiration times require precise temperature control throughout the cold chain. Without reliable demand forecasting, maintaining optimal inventory becomes challenging, leading to significant losses in perishable goods.",
          imagePlaceholder: "system-architecture"
        },
        {
          title: "PROPOSED SOLUTION",
          content: "An integrated real-time dashboard that enables cold chain operators to monitor produced and required goods based on demand and location. The system uses IoT sensors for real-time data collection, machine learning algorithms for demand forecasting, and visual analytics to optimize distribution. Example: Location A with high demand but low stock can identify Location B with excess inventory and arrange transportation, reducing waste while meeting demand.",
          imagePlaceholder: "data-collection-framework"
        },
        {
          title: "DEMAND FORECASTING",
          content: "The system employs multiple ML algorithms: Clustering Analysis to divide data into manageable segments, Outlier Analysis to detect anomalies, Time Series Analysis to predict future patterns, and Regression Analysis to forecast demand based on demographics and historical data. This enables proactive storage pattern adjustments to reduce transportation costs and wastage.",
          imagePlaceholder: "methodology-flowchart"
        },
        {
          title: "DASHBOARD FEATURES",
          points: [
            "Live demand and availability monitoring with real-time IoT integration",
            "Interactive filters for date, location, and commodity selection",
            "Pie chart visualization of commodity distribution across storage units",
            "Intelligent suggestions for redistribution based on demand-supply mismatch",
            "Historical data analysis with bar charts showing wastage patterns",
            "Machine learning-based forecasting for demand prediction"
          ],
          imagePlaceholder: "dashboard-outputs"
        },
        {
          title: "RESULTS",
          content: "The dashboard covers 136 Cold Storage Units across Tamil Nadu. Built using Streamlit with Python backend, it provides live updates compared to existing systems' periodic updates. The ML-based forecasting shows significant improvement over simple linear trends. Key achievement: 94.6% accuracy in demand prediction, enabling proactive resource allocation and wastage reduction.",
          imagePlaceholder: "comparative-analysis"
        },
        {
          title: "IMPACT",
          content: "This dashboard enables cold storage owners to optimize storage patterns, meet demand effectively, and drastically reduce wastage. By implementing data analytics and business intelligence, the system transforms decision-making for both government and private cold storage facilities across India, addressing the critical challenge of preserving the nation's second-largest fruit and vegetable production."
        }
      ],
      images: []
    },
    'education-ml': {
      title: "Enhancing Education through Machine Learning",
      type: "Research",
      conference: "1st Int'l Conference on Frontier Technologies, St. Joseph's College of Engineering",
      status: "Published",
      paperLink: "https://doi.org/your-paper-link",
      details: [
        "Built an AI tool using Isolation Forests on UDISE+ data to detect structurally non-standard schools in India.",
        "Enabled data-driven, zone-wise resource allocation aligned with Samagra Shiksha framework.",
        "Analyzed over 1.5 million school records to identify infrastructure gaps",
        "Developed predictive models for resource optimization"
      ],
      images: []
    },
    'malware-detection': {
      title: "EFFICIENT MALWARE DETECTION",
      subtitle: "Using Transfer Learning and GAN-Based Data Augmentation",
      type: "Research",
      conference: "International Conference on Computer Science and Engineering",
      status: "Published",
      paperLink: "https://doi.org/your-paper-link",
      abstract: "Rapid malware evolution calls for novel techniques that enhance the accuracy and resilience of traditional detection methods. This hybrid strategy combines GANs and transfer learning to improve malware detection through image representations. Converting malware binaries into grayscale images enables visual feature analysis to identify specific patterns that define malware. GANs generate artificial malware samples, enhancing the dataset with diverse adversarial examples that mimic real malware diversity, making the model more resistant to deceptive infection techniques. Transfer learning with pre-trained CNNs saves resources and reduces training strain. The system achieved 94% accuracy with improved detection rates and decreased false positives, demonstrating adaptability and scalability for real-time malware detection.",
      sections: [
        {
          title: "INTRODUCTION",
          content: "Given the ongoing challenge of rapid malware growth, effective detection is essential for safeguarding digital environments. Traditional malware detection methods like signature-based or heuristic-based approaches typically fail due to limited adaptability to new, invisible threats. The industry has undergone significant revolution through applications of machine learning and deep learning for malware detection. These technologies detect threats that might otherwise go unnoticed by using large datasets to find patterns and behaviors linked to malicious code. This project presents a hybrid approach combining transfer learning and GANs. Transfer learning enables models to leverage information from related domains even when labeled datasets are limited. GANs increase robustness by providing adversarial examples and artificial samples with malware characteristics, enabling the model to learn wider ranges of malicious patterns.",
          imagePlaceholder: "workflow-diagram"
        },
        {
          title: "LIMITATIONS OF EXISTING METHODS",
          content: "Current malware detection techniques have several serious drawbacks. They mostly use signature-based techniques, ineffective against unknown malware and unable to identify emerging variants and zero-day threats. Polymorphic and metamorphic malware alter their structure in real-time to avoid detection. High resource requirements make real-time monitoring and large-scale detection challenging. Systems are insensitive to different virus techniques and cannot be expanded to meet growing threats. Existing systems are vulnerable to competitive attacks where malware samples are modified to avoid detection. These drawbacks demonstrate the need for advanced methods like deep learning and GAN-based approaches to improve accuracy, scalability, and robustness.",
          imagePlaceholder: "comparison-chart"
        },
        {
          title: "METHODOLOGY & DATA PROCESSING",
          content: "The malware detection dataset obtained from Kaggle contains over 100,000 labeled samples stored in CSV format, covering diverse malware types including trojans and ransomware. Feature selection focuses on parameters such as process priority, user execution time, free area cache, non-voluntary context switches, and major page faults. Data preprocessing converts raw executable files into feature vectors or image representations suitable for machine learning models. These files are translated to grayscale images where each byte of the executable is mapped to pixel intensity. The workflow starts with data collection, followed by translation of malware files into grayscale images for better pattern analysis. Images are cleaned and optimized before feeding into the CNN algorithm for pattern recognition.",
          imagePlaceholder: "preprocessing-pipeline"
        },
        {
          title: "MODEL ARCHITECTURE",
          content: "The system employs three key components: Random Forest for feature importance scoring and handling large datasets with complex machine learning tasks. Generative Adversarial Network (GAN) with generator and discriminator components produces grayscale images resembling the dataset, creating diverse synthetic malware samples for training. Visual Geometry Group (VGG-19) serves as a powerful feature extractor using deep convolutional neural networks for processing grayscale images. The architecture includes convolution layers for feature extraction, max pooling layers for dimensionality reduction, fully connected layers for classification, and softmax classification for final predictions. The model is trained using both GAN-generated samples and real-world samples to detect advanced malware variants.",
          imagePlaceholder: "model-architecture"
        },
        {
          title: "RESULTS & PERFORMANCE METRICS",
          points: [
            "Overall Accuracy: 94% (increased from 91% without GAN augmentation)",
            "Precision: 95% for malware detection, 94% for benign classification",
            "Recall: 93% for malware, 95% for benign software",
            "F1-Score: 93% balanced performance across both classes",
            "AUC-ROC: 0.99 indicating excellent binary classification performance",
            "False Positive Rate: 2.3% with 461 false positives from 20,000 samples",
            "Confusion Matrix: 9,569 true positives and 9,328 true negatives"
          ],
          imagePlaceholder: "performance-metrics"
        },
        {
          title: "FEATURE IMPORTANCE & GAN IMPACT",
          content: "Random Forest feature importance analysis identified key attributes for malware detection, highlighting crucial features that enhance the model's ability to classify software as malware or benign. The usage of GAN for generating malware samples increased data diversity, helping the model generalize to unseen malware samples. GAN implementation showed a 3% accuracy increase (from 91% to 94%), significantly improving the model's ability to distinguish between malware and benign software. The pre-trained VGG-19 model enabled training on huge datasets with better feature extraction. Transfer learning implementation increased computational efficiency without affecting accuracy, preventing overfitting and enabling consistent malware detection across real-world samples.",
          imagePlaceholder: "feature-importance"
        },
        {
          title: "IMPACT & FUTURE DIRECTIONS",
          content: "This project achieved 94% accuracy, representing a significant milestone for malware prediction in computer systems. By using GAN and CNN models, the system is trained with diverse data and adapts to new malware threats through synthetic sample generation. Visual pattern recognition enables effective malware detection through CNN operations. The model can be improved with real-time updates and intensive evaluation for production deployment. The proposed system efficiently detects malware that could compromise user privacy and system security. This approach offers scalable, robust, and efficient real-time malware detection while balancing accuracy and computational cost. The system demonstrates versatility across different file types with stable performance, providing significant advantages over traditional signature-based and rule-based detection methods."
        }
      ],
      images: []
    },
    'hybrid-privacy': {
      title: "HYBRID DESIGN FOR PRIVACY PRESERVED IMAGE REPRESENTATION",
      subtitle: "Secure Image Storage in Cloud Environment Using ECC and AES",
      type: "Research",
      conference: "International Conference on Cloud Computing and Security",
      status: "Published",
      paperLink: "https://doi.org/your-paper-link",
      abstract: "Cloud computing has become essential for storing and sharing media, especially photos. However, concerns about data security and user privacy in online photo archives persist. This project presents a secure solution for encrypting and decrypting photos using hybrid encryption algorithms, ensuring encrypted images cannot be accessed by anyone, including cloud providers. The system combines Elliptic Curve Cryptography (ECC) for secure key generation with Advanced Encryption Standard (AES) for efficient bulk data encryption. Implemented on Azure cloud platform with Flask web interface, the solution provides real-time encryption during upload and seamless decryption during retrieval, giving users peace of mind while maintaining both ease of use and security for cloud storage solutions.",
      sections: [
        {
          title: "INTRODUCTION & PROBLEM STATEMENT",
          content: "Cloud computing refers to data center infrastructure hosting web-based applications and services. Microsoft's Azure Blob Storage provides flexible cloud storage for hosting, managing, and transporting images securely. However, data privacy concerns have come to the forefront as cloud computing becomes more widely adopted. Traditional cryptographic methods like AES, DES, and RSA face performance and computational burden challenges. Researchers tried watermarking and pixel shifting techniques, but discovered these compromised data originality during transformation, resulting in data loss. Recent advancements show promise in combining neural networks with cryptography algorithms. This project employs hybrid approaches for strengthened safety, combining symmetric encryption security with public key cryptography convenience for enhanced system efficiency and security.",
          imagePlaceholder: "cloud-security-overview"
        },
        {
          title: "PROPOSED HYBRID SYSTEM",
          content: "This project employs a hybrid approach integrating Elliptic Curve Cryptography (ECC) with Advanced Encryption Standard (AES). ECC, a cutting-edge public-key cryptography technique, improves key exchange and digital signatures, while AES ensures efficient and secure bulk data encryption. The hybrid approach merges the best features of both algorithms: ECC for secure key exchange with smaller key sizes and strong security features, and AES for efficient bulk data encryption with great speed and security. The system satisfies general cryptography requirements and unique cloud image storage needs. Key benefits include: secure key exchange, efficient data encryption, digital signature verification, enhanced security, improved efficiency, scalability, optimized key management, and seamless integration with cloud platforms.",
          imagePlaceholder: "hybrid-encryption-diagram"
        },
        {
          title: "SYSTEM ARCHITECTURE",
          content: "The architecture integrates Azure PaaS services including Azure Functions, Key Vault, and Blob Storage within the Azure cloud environment. The system has two primary goals: encrypting user-uploaded images during storage and ensuring secure retrieval. When a user uploads an image, a unique encryption key is generated using ECC algorithm with strong security features and smaller key size. This ECC-generated key is essential for decrypting encrypted images. With the ECC key securely stored, the system uses AES symmetric encryption for its speed and security. Images are encrypted using AES, making them unreadable without the key. During retrieval, the server generates an AES decryption key using the user's requested ECC key, successfully reversing the encryption process and granting access to the image. This combination protects images from unauthorized access throughout the entire process.",
          imagePlaceholder: "system-architecture"
        },
        {
          title: "IMPLEMENTATION MODULES",
          points: [
            "User Interface Module: Flask-based Python framework providing safe interface for storing and accessing images with user-friendly design",
            "Image Upload Module: Processes upload requests via HTTP to Azure Function, triggers Blob activation for encryption, stores keys in Azure Key Vault",
            "Image Retrieval Module: HTTP Trigger activates Azure Function to decrypt files, securely retrieves decryption keys from Key Vault",
            "Azure Function Module: Handles fundamental upload/retrieval features, supports custom encryption/decryption, manages Blob and HTTP Triggers",
            "Azure Key Vault Module: Crucial for secure key management, stores and retrieves encryption/decryption keys, integrates with Azure Functions"
          ],
          imagePlaceholder: "module-architecture"
        },
        {
          title: "IMPLEMENTATION RESULTS",
          content: "The single-page user interface built using Flask framework provides seamless file upload and image retrieval. The Flask server handles incoming HTTP requests and provides responses efficiently. The webpage features a file picker for uploads and displays retrieved images from the cloud in a convenient arrangement. During upload, Azure Functions perform on-time encryption of images. Encrypted files with unreadable format (.enc) are stored in specific Azure Blob Storage containers. These files are not readable and can only be decrypted using specific keys and algorithms, providing an additional security layer. Every user entry triggers automatic decryption for image retrieval, ensuring secure on-time decryption during retrieval. The system demonstrates successful integration of encryption, cloud storage, and user interface components.",
          imagePlaceholder: "implementation-screenshots"
        },
        {
          title: "SECURITY FEATURES & BENEFITS",
          content: "The proposed system prioritizes protection of user images, preventing any unauthorized access or tampering. Key security features include: ECC for secure key generation with smaller key sizes compared to traditional methods, AES for efficient symmetric encryption of image data, Azure Key Vault for centralized secure key management, encrypted storage format making files unreadable without proper credentials, on-time encryption during upload and decryption during retrieval, and seamless integration with Azure cloud infrastructure. The system emphasizes user-controlled management with automatic encryption/decryption processes. Benefits include enhanced privacy protection, efficient performance with hybrid encryption, scalability for cloud environments, and user-friendly interface requiring no technical expertise.",
          imagePlaceholder: "security-features"
        },
        {
          title: "IMPACT & CONCLUSION",
          content: "The project establishes a high level of privacy and security in today's digital era by striking a balance between security and user convenience within cloud environments. By promoting this hybrid encryption approach, users can embrace cloud-based image management without concerns about personal data falling into wrong hands. The combination of ECC and AES increases security degree significantly, with ECC providing robust key management and AES ensuring fast, secure encryption. Users can rely on this system to ensure their image data security in cloud-based storage solutions. The system enables users to maintain complete control over their visual content while benefiting from cloud storage advantages. Future enhancements can include multi-cloud support, mobile application integration, and advanced key rotation mechanisms for even stronger security."
        }
      ],
      images: []
    },
    'forensiq': {
      title: "FORENSIQ",
      subtitle: "A Multi-Modal Ensemble Framework for Automated Digital Forensics Evidence Classification and Investigation",
      type: "Project",
      tech: "React, Flask, ML, NLP, AWS",
      githubLink: "https://github.com/yourusername/forensiq",
      abstract: "ForensiQ is a digital forensics evidence classification platform built to improve the speed and accuracy of cybersecurity investigations. Leveraging a multi-algorithm ensemble framework, it combines BERT-based semantic embeddings, forensic expert pattern matching, and trained machine learning models (XGBoost, Random Forest, Gradient Boosting) to classify digital evidence as benign, suspicious, or malicious. ForensiQ achieves 94.57% accuracy through end-to-end feature engineering with multi-modal inputs including statistical measures, domain-aware threat signals, and TF-IDF vectorization with mutual information feature selection. The system maintains real-time processing at 250 documents per second with automated report generation and visual dashboards.",
      sections: [
        {
          title: "INTRODUCTION",
          content: "Digital forensics is now a cornerstone of modern cybersecurity, law enforcement, and incident response. Traditional forensic methods involving rule-based or manual examination are no longer sufficient, plagued with scalability, response delay, and unstable accuracy. ForensiQ leverages advanced AI techniques to accelerate digital forensic evidence triaging and classification. At its center is an ensemble learning architecture combining contextual semantic understanding through BERT embeddings and forensic expertise-based knowledge. The system categorizes evidence into three risk levels: benign, suspicious, and malicious, enabling tiered investigation and resource prioritization. Features include NLP analysis with entity extraction (names, emails, geolocation), sentiment analysis, digital timeline reconstruction, and actor-network graph visualization.",
          imagePlaceholder: "forensiq-overview"
        },
        {
          title: "SYSTEM ARCHITECTURE",
          content: "ForensiQ provides an end-to-end, modular, cloud-backed architecture for automated digital forensics investigations. The web application allows investigators to import various forms of digital evidence through a secure-encrypted channel. The backend leverages AWS services (API Gateway, Lambda, S3) for efficient and scalable data handling. Evidence files are uploaded to S3 for secure storage with metadata in a centralized relational database. The ML pipeline handles: (1) preprocessing to normalize disparate file inputs; (2) entity extraction using BERT and SpaCy for IPs, emails, URLs, and suspicious keywords; (3) timeline and graph modeling using NetworkX. Cloud endpoints provide real-time inference and file classification. Admins have access to evidence control, workflow audit, user control, and approval workflows for legal chain-of-custody.",
          imagePlaceholder: "system-architecture"
        },
        {
          title: "FEATURE EXTRACTION & METHODOLOGY",
          content: "ForensiQ's feature extraction transforms raw digital evidence into structured, multi-modal inputs. BERT Embeddings with Attention Pooling process tokenized text through pretrained models for semantic understanding. Advanced TF-IDF Vectorization uses extended n-gram analysis (1-, 2-, 3-grams) for linguistic patterns. Statistical Feature Engineering extracts lexical diversity, character entropy, and pattern counts for URLs, emails, IP addresses, and hashes. Expert Forensic Pattern Matching aggregates matches by category (Critical Threats, Malware, Network Threats) with weighted scoring. Classification logic: MALICIOUS (Total Score ≥15), SUSPICIOUS (4≤Score<15), BENIGN (Score<4).",
          imagePlaceholder: "feature-extraction"
        },
        {
          title: "MULTI-ALGORITHM ENSEMBLE",
          content: "A weighted soft-voting classifier combines three algorithms: XGBoost (Weight: 2), Random Forest (Weight: 1), and Gradient Boosting (Weight: 1). The ensemble architecture achieved 94.57% classification accuracy, significantly exceeding the 85% target. Individual model performance: XGBoost 91.38%, Random Forest 88.79%, Gradient Boosting 87.93%. The ensemble consistently produces the highest accuracy, demonstrating the advantage of combining complementary algorithmic strengths. 5-fold stratified cross-validation confirms robust generalization with mean fold accuracy of 83.23% and standard deviation of ±3.02%.",
          imagePlaceholder: "confusion-matrix"
        },
        {
          title: "RESULTS & PERFORMANCE",
          points: [
            "Classification Accuracy: 94.57% with precision, recall, and F1-score all exceeding 94%",
            "Real-time Processing: 250 documents per second throughput",
            "Cross-Validation: Mean accuracy 83.23% across 5 folds with ±3.02% standard deviation",
            "Feature Importance: Critical Threats Score (0.1247), BERT Attention Vector (0.0892), TF-IDF Malware (0.0731)",
            "Analyst Workload Reduction: 85% decrease in manual triage time",
            "Automated Case Summaries: Integrated dashboards for quick informed decisions"
          ],
          imagePlaceholder: "performance-graphs"
        },
        {
          title: "ANALYTICAL CAPABILITIES",
          content: "ForensiQ provides comprehensive analytical dashboards with visual explanations. Risk Level Distribution graphs offer visual summaries of evidence proportions. Actor-Resource Network graphs illustrate how evidence, user sessions, and inter-entity relationships evolve over time, critical for reconstructing multi-actor events and identifying privilege escalation, lateral movement, and coordinated activity. Timeline Analysis provides chronological visualization of events, user sessions, and risk levels, validating the system's ability to reconstruct evidence workflows and spot anomalous activity. Named Entity Recognition modules extract key forensic artifacts, and sentiment analysis detects urgent or threatening communications.",
          imagePlaceholder: "actor-network-timeline"
        },
        {
          title: "IMPACT & APPLICATIONS",
          content: "ForensiQ demonstrates that ensemble machine learning, deep semantic analysis, and forensic expert pattern matching can be combined to produce highly accurate, scalable, and resilient digital evidence classification. The system significantly outperforms traditional methods and optimizes digital forensic operations for law enforcement, corporate security, and cybersecurity operations. Future enhancements include domain-adapted transformer models, increased support for multi-modal evidence types (images, network logs), real-time streaming analysis, improved interpretability for legal admissibility, and enhanced resilience to adversarial content. ForensiQ sets new accuracy and reliability standards in automated digital forensics."
        }
      ],
      images: []
    },
    // Add more project details as needed
  }

  const project = projectDetails[id] || {}

  return (
    <div className="detail-page">
      <Link to="/" className="back-link">← BACK TO PROJECTS</Link>
      
      <motion.div
        className="detail-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="detail-header">
          <h1>{project.title}</h1>
          {project.subtitle && <p className="subtitle">{project.subtitle}</p>}
          <div className="detail-meta">
            <span className="item-type">{project.type}</span>
            {project.conference && (
              <>
                <span className="separator">•</span>
                <span className="conference">{project.conference}</span>
              </>
            )}
            {project.status && (
              <span className={`status ${project.status?.toLowerCase().replace(' ', '-')}`}>
                {project.status}
              </span>
            )}
            {project.tech && (
              <>
                <span className="separator">•</span>
                <span className="tech">{project.tech}</span>
              </>
            )}
          </div>
          {(project.paperLink || project.githubLink) && (
            <div className="links-section">
              {project.paperLink && (
                <a href={project.paperLink} target="_blank" rel="noopener noreferrer" className="paper-link">
                  VIEW PAPER →
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="paper-link">
                  VIEW CODE →
                </a>
              )}
            </div>
          )}
        </div>

        {project.abstract && (
          <div className="abstract-section">
            <h2>ABSTRACT</h2>
            <p>{project.abstract}</p>
          </div>
        )}

        <div className="detail-body">
          {project.sections ? (
            project.sections.map((section, index) => (
              <div key={index} className="content-section">
                <h2>{section.title}</h2>
                {section.content && <p className="section-content">{section.content}</p>}
                {section.points && (
                  <ul className="detail-list">
                    {section.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))
          ) : (
            <>
              <h2>OVERVIEW</h2>
              <ul className="detail-list">
                {project.details?.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Image placeholders at bottom */}
        <div className="images-section">
          <h2>VISUALS</h2>
          <div className="images-grid">
            {project.sections?.filter(s => s.imagePlaceholder).map((section, index) => (
              <div key={index} className="image-placeholder">
                <span>[{section.imagePlaceholder.toUpperCase()}]</span>
              </div>
            )) || (
              project.images && project.images.length > 0 ? (
                project.images.map((img, index) => (
                  <img key={index} src={img} alt={`${project.title} ${index + 1}`} />
                ))
              ) : (
                <>
                  <div className="image-placeholder"><span>[IMAGE 1]</span></div>
                  <div className="image-placeholder"><span>[IMAGE 2]</span></div>
                  <div className="image-placeholder"><span>[IMAGE 3]</span></div>
                </>
              )
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ResearchProjectDetail
