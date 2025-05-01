import Badge from 'react-bootstrap/Badge';

const skills = ['React', 'Node.js', 'Bootstrap', 'MongoDB'];

const Skills = () => (
  <div>
    {skills.map((skill, index) => (
      <Badge key={index} bg="secondary" className="m-1">
        {skill}
      </Badge>
    ))}
  </div>
);
export default skills;