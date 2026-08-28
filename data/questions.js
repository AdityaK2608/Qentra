// Qentra question-data contract. Replace sample records only with source-verified exam data.
window.QENTRA_DATA = {
  STET: [
    {id:'stet-demo-001',year:'2024',topic:'DBMS',subtopic:'Normalization',type:'exact',question:'Which normal form removes partial dependency?',options:['1NF','2NF','3NF','BCNF'],answer:1,source:'DEMO — replace with verified paper source'},
    {id:'stet-demo-002',year:'2024',topic:'Operating Systems',subtopic:'Process Scheduling',type:'concept',question:'Which scheduling approach can cause starvation?',options:['FCFS','Round Robin','Priority Scheduling','FIFO Paging'],answer:2,source:'DEMO — replace with verified paper source'},
    {id:'stet-demo-003',year:'2023',topic:'Computer Networks',subtopic:'IP Addressing',type:'reframed',question:'Which protocol maps an IP address to a MAC address on a local network?',options:['DNS','ARP','DHCP','FTP'],answer:1,source:'DEMO — replace with verified paper source'},
    {id:'stet-demo-004',year:'2023',topic:'Data Structures',subtopic:'Trees & Graphs',type:'new',question:'Which traversal of a binary search tree visits keys in sorted order?',options:['Preorder','Postorder','Inorder','Level order'],answer:2,source:'DEMO — replace with verified paper source'},
    {id:'stet-demo-005',year:'2022',topic:'Programming',subtopic:'Complexity',type:'concept',question:'What is the average-case complexity of binary search on a sorted array?',options:['O(1)','O(log n)','O(n)','O(n log n)'],answer:1,source:'DEMO — replace with verified paper source'}
  ],
  TRE: [
    {id:'tre-demo-001',year:'2024',topic:'DBMS',subtopic:'Normalization',type:'exact',question:'A relation is in 3NF when which dependency condition is satisfied?',options:['No multivalued dependency','No transitive dependency of non-key attributes','No partial dependency','Every determinant is a superkey'],answer:1,source:'DEMO — replace with verified paper source'},
    {id:'tre-demo-002',year:'2023',topic:'Operating Systems',subtopic:'Deadlocks',type:'reframed',question:'Which condition is required for deadlock to occur?',options:['Mutual exclusion','Compilation','Recursion','Paging'],answer:0,source:'DEMO — replace with verified paper source'},
    {id:'tre-demo-003',year:'2023',topic:'Computer Networks',subtopic:'Routing',type:'concept',question:'Which algorithm is classically associated with shortest-path routing?',options:['Dijkstra','Kruskal','Prim','Huffman'],answer:0,source:'DEMO — replace with verified paper source'},
    {id:'tre-demo-004',year:'2022',topic:'Programming',subtopic:'OOP',type:'new',question:'Which OOP feature allows one interface to represent different underlying forms?',options:['Encapsulation','Polymorphism','Compilation','Iteration'],answer:1,source:'DEMO — replace with verified paper source'},
    {id:'tre-demo-005',year:'2022',topic:'Data Structures',subtopic:'Trees & Graphs',type:'concept',question:'Which data structure is commonly used for breadth-first search?',options:['Stack','Queue','Heap','Set'],answer:1,source:'DEMO — replace with verified paper source'}
  ]
};
