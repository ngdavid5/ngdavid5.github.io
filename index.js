const before = "https://ci02.eng.appianci.net/view/ked0u_AN-164184_ae/job/ked0u_AN-164184_ae-records-daily/8/testReport/";

const JENKINS_TEMPLATE = "https://ci00.eng.appianci.net/view/appian_master_ae/job/"

const getJobName = url => {
  const parts = url.split("_");
  const lastPart = parts[parts.length - 1];
  return lastPart.split("/")[0];
}
const getMasterUrl = url => `${JENKINS_TEMPLATE}appian_master_${getJobName(url)}/`;
const getMaintUrl = url => `${JENKINS_TEMPLATE}appian_20.3-maint_${getJobName(url)}/`;

const openMasterUrl = () => {
    const url = $("#url-input").val();
    if (url !== null && url !== "") {
        window.open(getMasterUrl(url), '_blank')
    }
}

const openMaintUrl = () => {
    const url = $("#url-input").val();
    if (url !== null && url !== "") {
        window.open(getMaintUrl(url), '_blank')
    }
}

$("#master-btn").click(openMasterUrl);
$("#maint-btn").click(openMaintUrl);