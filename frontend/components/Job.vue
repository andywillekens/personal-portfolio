<script lang="ts" setup>
defineProps<{
  job: any
}>()
</script>
<template>
  <Card :hover="false" direction="vertical">
    <header class="flex flex-col sm:flex-row gap-2 justify-between items-start">
      <JobTitle :title="job.title" :companyName="job.company" />
      <Pill icon="ph:map-pin-area" :text="job.locations.join(', ')" />
    </header>
    <section>
      <EmploymentPeriod :start="job.employmentPeriod_start" :end="job.employmentPeriod_end" />
      <Activities :activities="job.activities" />
      <TechStack :techStack="job.techStack" />
    </section>
    <footer></footer>
  </Card>
</template>
