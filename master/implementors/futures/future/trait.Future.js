(function() {var implementors = {};
implementors["hyper"] = ["impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"hyper/client/conn/struct.Connection.html\" title=\"struct hyper::client::conn::Connection\">Connection</a>&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1.6/tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1.6/tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>&lt;Error = <a class=\"enum\" href=\"hyper/error/enum.Error.html\" title=\"enum hyper::error::Error\">Error</a>&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"type\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures::stream::Stream::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt;,&nbsp;</span>","impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"hyper/client/conn/struct.Handshake.html\" title=\"struct hyper::client::conn::Handshake\">Handshake</a>&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1.6/tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1.6/tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>&lt;Error = <a class=\"enum\" href=\"hyper/error/enum.Error.html\" title=\"enum hyper::error::Error\">Error</a>&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"type\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures::stream::Stream::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt;,&nbsp;</span>","impl <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"hyper/client/conn/struct.ResponseFuture.html\" title=\"struct hyper::client::conn::ResponseFuture\">ResponseFuture</a>","impl <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"hyper/client/struct.FutureResponse.html\" title=\"struct hyper::client::FutureResponse\">FutureResponse</a>","impl&lt;I, B, S&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"hyper/server/conn/struct.Connection.html\" title=\"struct hyper::server::conn::Connection\">Connection</a>&lt;I, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"hyper/server/trait.Service.html\" title=\"trait hyper::server::Service\">Service</a>&lt;Request = <a class=\"struct\" href=\"hyper/struct.Request.html\" title=\"struct hyper::Request\">Request</a>, Response = <a class=\"struct\" href=\"hyper/struct.Response.html\" title=\"struct hyper::Response\">Response</a>&lt;B&gt;, Error = <a class=\"enum\" href=\"hyper/error/enum.Error.html\" title=\"enum hyper::error::Error\">Error</a>&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1.6/tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1.6/tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>&lt;Error = <a class=\"enum\" href=\"hyper/error/enum.Error.html\" title=\"enum hyper::error::Error\">Error</a>&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"type\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures::stream::Stream::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt;,&nbsp;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
