Bahmni.ConceptSet.FormConditions.rules = {
    'Diastolic Data' : function (formName, formFieldValues) {
        var systolic = formFieldValues['Systolic'];
        var diastolic = formFieldValues['Diastolic'];
        if (systolic || diastolic) {
            return {
                enable: ["Posture"]
            };
        } else {
            return {
                disable: ["Posture"]
            };
        }
    },
    'Systolic Data' : function (formName, formFieldValues) {
        var systolic = formFieldValues['Systolic'];
        var diastolic = formFieldValues['Diastolic'];
        if (systolic || diastolic) {
            return {
                enable: ["Posture"]
            };
        } else {
            return {
                disable: ["Posture"]
            };
        }
    },
    'History of Present Illness' : function (formName, formFieldValues, patient) {
        var patientAge = patient['age'];
        var sections = {
            "show": [],
            "hide": []
        };

        if (patientAge < 5) {
            return {
                show: ["Head Circumference"]
            };
        } else {
            return {
                hide: ["Head Circumference"]
            };
        }
    },
    'Past Medical History Details' : function (formName, formFieldValues, patient) {
        var patientAge = patient['age'];
        var patientGender = patient['gender'];
        var sections = {
            "show": [],
            "hide": []
        };

        if (patientAge < 1) {
            return {
                show: ["Newborn Immunizations Set"]
            };
        } else if (patientAge >= 1 && patientAge < 16) {
            return {
                hide: ["Newborn Immunizations Set"]
            };
        } else if (patientAge >= 16 && patientGender == 'F') {
            return {
                hide: ["Newborn Immunizations Set"]
            };
        } else {
            return {
                hide: ["Newborn Immunizations Set"]
            };
        }
    },
    'Past Surgical History' : function (formName, formFieldValues, patient) {
        var patientAge = patient['age'];
        var patientGender = patient['gender'];
        var sections = {
            "show": [],
            "hide": []
        };

        if (patientAge < 1) {
            return {
                hide: ["Child Immunizations Set"]
            };
        } else if (patientAge >= 1 && patientAge < 16) {
            return {
                show: ["Child Immunizations Set"]
            };
        } else if (patientAge >= 16 && patientGender == 'F') {
            return {
                hide: ["Child Immunizations Set"]
            };
        } else {
            return {
                hide: ["Child Immunizations Set"]
            };
        }
    },
    'Allergies' : function (formName, formFieldValues, patient) {
        var patientAge = patient['age'];
        var patientGender = patient['gender'];
        var sections = {
            "show": [],
            "hide": []
        };

        if (patientAge < 1) {
            return {
                hide: ["Pregnant Women Immunizations Set"]
            };
        } else if (patientAge >= 1 && patientAge < 13) {
            return {
                hide: ["Pregnant Women Immunizations Set"]
            };
        } else if (patientAge >= 13 && patientGender == 'F') {
            return {
                show: ["Pregnant Women Immunizations Set"]
            };
        } else {
            return {
                hide: ["Pregnant Women Immunizations Set"]
            };
        }
    },
    'Pregnancy Number' : function (formName, formFieldValues, patient) {
        var patientAge = patient['age'];
        var patientGender = patient['gender'];
        var sections = {
            "show": [],
            "hide": []
        };

        if (patientAge < 1) {
            return {
                hide: ["Pregnant Women Immunizations Set"]
            };
        } else if (patientAge >= 1 && patientAge < 13) {
            return {
                hide: ["Pregnant Women Immunizations Set"]
            };
        } else if (patientAge >= 13 && patientGender == 'F') {
            return {
                show: ["Pregnant Women Immunizations Set"]
            };
        } else {
            return {
                hide: ["Pregnant Women Immunizations Set"]
            };
        }
    },
    'Past Medical History' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['Past Medical History'];

        var sections = {
            "show": [],
            "hide": []
        };

        if (fieldValue && fieldValue.indexOf('Cancer') > -1) {
            sections.show.push("Past Cancer Details");
        } else {
            sections.hide.push("Past Cancer Details");
        }

        return sections;
    },
    'BCG' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['BCG'];
        if (fieldValue) {
            return {
                show: ["BCG, Date Given"]
            };
        }
        else {
            return {
                hide: ["BCG, Date Given"]
            };
        }
    },
    'HepB at birth' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['HepB at birth'];
        if (fieldValue) {
            return {
                show: ["HepB at birth, time administrered after birth"]
            };
        }
        else {
            return {
                hide: ["HepB at birth, time administrered after birth"]
            };
        }
    },
    'MR***' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['MR***'];
        if (fieldValue) {
            return {
                show: ["MR***, Date Given"]
            };
        }
        else {
            return {
                hide: ["MR***, Date Given"]
            };
        }
    },
    'Polio1' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Polio1'];
        if (fieldValue) {
            return {
                show: ["Polio1, Date Given"]
            };
        }
        else {
            return {
                hide: ["Polio1, Date Given"]
            };
        }
    },
    'Polio2' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Polio2'];
        if (fieldValue) {
            return {
                show: ["Polio2, Date Given"]
            };
        }
        else {
            return {
                hide: ["Polio2, Date Given"]
            };
        }
    },
    'Polio3' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Polio3'];
        if (fieldValue) {
            return {
                show: ["Polio3, Date Given"]
            };
        }
        else {
            return {
                hide: ["Polio3, Date Given"]
            };
        }
    },
    'IPV' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['IPV'];
        if (fieldValue) {
            return {
                show: ["IPV, Date Given"]
            };
        }
        else {
            return {
                hide: ["IPV, Date Given"]
            };
        }
    },
    'DTP-Hep-Hip1' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['DTP-Hep-Hip1'];
        if (fieldValue) {
            return {
                show: ["DTP-Hep-Hip1, Date Given"]
            };
        }
        else {
            return {
                hide: ["DTP-Hep-Hip1, Date Given"]
            };
        }
    },'DTP-Hep-Hip2' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['DTP-Hep-Hip2'];
        if (fieldValue) {
            return {
                show: ["DTP-Hep-Hip2, Date Given"]
            };
        }
        else {
            return {
                hide: ["DTP-Hep-Hip2, Date Given"]
            };
        }
    },
    'DTP-Hep-Hip3' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['DTP-Hep-Hip3'];
        if (fieldValue) {
            return {
                show: ["DTP-Hep-Hip3, Date Given"]
            };
        }
        else {
            return {
                hide: ["DTP-Hep-Hip3, Date Given"]
            };
        }
    },
    'PCV1' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['PCV1'];
        if (fieldValue) {
            return {
                show: ["PCV1, Date Given"]
            };
        }
        else {
            return {
                hide: ["PCV1, Date Given"]
            };
        }
    },
    'PCV2' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['PCV2'];
        if (fieldValue) {
            return {
                show: ["PCV2, Date Given"]
            };
        }
        else {
            return {
                hide: ["PCV2, Date Given"]
            };
        }
    },
    'PCV3' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['PCV3'];
        if (fieldValue) {
            return {
                show: ["PCV3, Date Given"]
            };
        }
        else {
            return {
                hide: ["PCV3, Date Given"]
            };
        }
    },
    'MR1' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['MR1'];
        if (fieldValue) {
            return {
                show: ["MR1, Date Given"]
            };
        }
        else {
            return {
                hide: ["MR1, Date Given"]
            };
        }
    },
    'JE' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['JE'];
        if (fieldValue) {
            return {
                show: ["JE, Date Given"]
            };
        }
        else {
            return {
                hide: ["JE, Date Given"]
            };
        }
    },
    'Tetanus1' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Tetanus1'];
        if (fieldValue) {
            return {
                show: ["Tetanus1, Date Given"]
            };
        }
        else {
            return {
                hide: ["Tetanus1, Date Given"]
            };
        }
    },
    'Tetanus2' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Tetanus2'];
        if (fieldValue) {
            return {
                show: ["Tetanus2, Date Given"]
            };
        }
        else {
            return {
                hide: ["Tetanus2, Date Given"]
            };
        }
    },
    'Tetanus3' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Tetanus3'];
        if (fieldValue) {
            return {
                show: ["Tetanus3, Date Given"]
            };
        }
        else {
            return {
                hide: ["Tetanus3, Date Given"]
            };
        }
    },
    'Tetanus4' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Tetanus4'];
        if (fieldValue) {
            return {
                show: ["Tetanus4, Date Given"]
            };
        }
        else {
            return {
                hide: ["Tetanus4, Date Given"]
            };
        }
    },
    'Tetanus5' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Tetanus5'];
        if (fieldValue) {
            return {
                show: ["Tetanus5, Date Given"]
            };
        }
        else {
            return {
                hide: ["Tetanus5, Date Given"]
            };
        }
    },
    'Progress Note' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Genitourinary Female Symptoms'];
        var patientGender = patient['gender'];
        var sections = {
            "show": [],
            "hide": []
        };
        if (patientGender == 'M') {
            sections.hide.push("Genitourinary Female Symptoms");
            sections.hide.push("Genitourinary Female Exam Abnormalities");
        } else if (patientGender == 'F') {
            sections.hide.push("Genitourinary Male Symptoms");
            sections.hide.push("Genitourinary Male Exam Abnormalities");
        }
        return sections;
    }
};