const sequelize = require("../config/database");
const { LecturerSchedule, Lecturer, Subject, Room, Building } = require("../models");

class LecturerService {
  async getLecturerFreeTime(lecturerId) {
    const query = `
      WITH all_hours AS (
          SELECT 'Monday' AS day_of_week, '08:00:00' AS start_time, '18:00:00' AS end_time UNION ALL
          SELECT 'Tuesday', '08:00:00', '18:00:00' UNION ALL
          SELECT 'Wednesday', '08:00:00', '18:00:00' UNION ALL
          SELECT 'Thursday', '08:00:00', '18:00:00' UNION ALL
          SELECT 'Friday', '08:00:00', '18:00:00' UNION ALL
          SELECT 'Saturday', '08:00:00', '18:00:00' UNION ALL
          SELECT 'Sunday', '08:00:00', '18:00:00'
      )
      SELECT 
          ah.day_of_week,
          CASE 
              WHEN ls.start_time IS NULL THEN ah.start_time 
              ELSE ADDTIME(ls.end_time, '00:30:00')  
          END AS free_start_time,
          CASE 
              WHEN ls.start_time IS NULL THEN ah.end_time
              ELSE ls.start_time
          END AS free_end_time
      FROM all_hours ah
      LEFT JOIN lecturer_schedules ls 
      ON ah.day_of_week = ls.day_of_week 
      WHERE ls.lecturer_id = :lecturerId
      ORDER BY ah.day_of_week, free_start_time;
    `;

    const freeTimes = await sequelize.query(query, {
      replacements: { lecturerId },
      type: sequelize.QueryTypes.SELECT,
    });

    return freeTimes;
  }

  async getLecturerSchedule(lecturerId) {
    return await LecturerSchedule.findAll({
      where: { lecturer_id: lecturerId },
      include: [
        { model: Lecturer, attributes: ["name", "email"] },
        { model: Subject, attributes: ["name", "code"] },
        { 
          model: Room, 
          attributes: ["name", "code"], 
          include: [{ model: Building, attributes: ["name", "code"] }]
        }
      ],
      order: [["day_of_week", "ASC"], ["start_time", "ASC"]] // Sắp xếp theo ngày và giờ
    });
  }
  async getLecturerAppointments(lecturerId) {
    return await Appointment.findAll({
      where: { lecturer_id: lecturerId },
      include: [
        { model: Student, attributes: ["name", "email"] },
        { 
          model: Room, 
          attributes: ["name", "code"],
          include: [{ model: Building, attributes: ["name", "code"] }]
        }
      ],
      order: [["date_time", "ASC"]]
    });
  }
  async getLecturerScheduleAndAppointments(lecturerId) {
    const teachingSchedule = await this.getLecturerTeachingSchedule(lecturerId);
    const appointments = await this.getLecturerAppointments(lecturerId);

    return { teachingSchedule, appointments };
  }
}

module.exports = new LecturerService();
