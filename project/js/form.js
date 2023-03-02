function serializeForm(formNode) {
  let data = new FormData(formNode);
  console.log(Array.from(data.entries()))

  return data;
}

async function sendData(data) {
  return await fetch('http://localhost:3000/posts/1', {
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    body: JSON.stringify(data),
  })
}

// Вызовем её вот так:
async function handleFormSubmit(event) {
  event.preventDefault()
  const data = serializeForm(event.target)

  const { status } = await sendData(data)

  if (status === 404) {
    onSuccess(event.target)
  }
}


function onSuccess(formNode) {
  alert('Ваша заявка отправлена!')
}





const applicantForm = document.getElementById('form')
applicantForm.addEventListener('submit', handleFormSubmit)
