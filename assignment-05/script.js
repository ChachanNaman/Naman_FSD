function generateResume() {
    const get = (id) => document.getElementById(id).value.trim();
  
    const name = get('name');
    const email = get('email');
    const phone = get('phone');
    const linkedin = get('linkedin');
    const objective = get('objective');
    const summary = get('summary');
    const degree = get('degree');
    const college = get('college');
    const year = get('year');
    const cgpa = get('cgpa');
    const academicSkills = get('academic-skills');
    const nonAcademicSkills = get('nonacademic-skills');
    const company = get('company');
    const role = get('role');
    const duration = get('duration');
    const expDesc = get('exp-desc');
    const achievements = get('achievements');
  
    if (!name) {
      alert('Please enter your name to generate the resume.');
      return;
    }
  
    const skillTags = (str) =>
      str.split(',').map(s => `<span class="skill-tag">${s.trim()}</span>`).join('');
  
    const achievementItems = achievements
      ? achievements.split('\n').filter(a => a.trim())
          .map(a => `<li>${a.trim()}</li>`).join('') : '';
  
    document.getElementById('resume-preview').innerHTML = `
      <div class="resume-paper">
  
        <!-- NAME + CONTACT -->
        <div class="resume-header-block">
          <div class="resume-name">${name}</div>
          <div class="resume-contact-bar">
            ${email ? `<span>${email}</span>` : ''}
            ${phone ? `<span>${phone}</span>` : ''}
            ${linkedin ? `<span>${linkedin}</span>` : ''}
          </div>
        </div>
  
        <!-- CAREER OBJECTIVE -->
        ${objective ? `
          <div class="r-section">
            <div class="section-title">Career Objective</div>
            <p class="resume-text">${objective}</p>
          </div>
        ` : ''}
  
        <!-- PROFESSIONAL SUMMARY -->
        ${summary ? `
          <div class="r-section">
            <div class="section-title">Professional Summary</div>
            <p class="resume-text">${summary}</p>
          </div>
        ` : ''}
  
        <!-- EDUCATION -->
        ${degree || college ? `
          <div class="r-section">
            <div class="section-title">Education</div>
            <div class="r-entry">
              <div class="r-entry-header">
                <div>
                  <div class="r-entry-title">${college}</div>
                  <div class="r-entry-sub">${degree}</div>
                </div>
                <div class="r-entry-right">
                  <div class="r-date">${year}</div>
                  ${cgpa ? `<div class="r-cgpa">CGPA: ${cgpa}</div>` : ''}
                </div>
              </div>
            </div>
          </div>
        ` : ''}
  
        <!-- EXPERIENCE -->
        ${company || role ? `
          <div class="r-section">
            <div class="section-title">Professional Experience</div>
            <div class="r-entry">
              <div class="r-entry-header">
                <div>
                  <div class="r-entry-title">${company}</div>
                  <div class="r-entry-sub">${role}</div>
                </div>
                <div class="r-entry-right">
                  ${duration ? `<div class="r-date">${duration}</div>` : ''}
                </div>
              </div>
              ${expDesc ? `
                <ul class="r-bullets">
                  ${expDesc.split('\n').filter(l => l.trim()).map(l => `<li>${l.trim()}</li>`).join('')}
                </ul>
              ` : ''}
            </div>
          </div>
        ` : ''}
  
        <!-- SKILLS -->
        ${academicSkills || nonAcademicSkills ? `
          <div class="r-section">
            <div class="section-title">Skills</div>
            <table class="skills-table">
              ${academicSkills ? `
                <tr>
                  <td class="skill-label">Academic Skills</td>
                  <td class="skill-val">${academicSkills}</td>
                </tr>` : ''}
              ${nonAcademicSkills ? `
                <tr>
                  <td class="skill-label">Non-Academic Skills</td>
                  <td class="skill-val">${nonAcademicSkills}</td>
                </tr>` : ''}
            </table>
          </div>
        ` : ''}
  
        <!-- ACHIEVEMENTS -->
        ${achievementItems ? `
          <div class="r-section">
            <div class="section-title">Achievements</div>
            <ul class="r-bullets">${achievementItems}</ul>
          </div>
        ` : ''}
  
      </div>
    `;
  }